import { shallowMount, Wrapper } from "@vue/test-utils";
import Laedeli from "@/views/Laedeli.vue";

describe("Lädeli Page", () => {
  it("check loading message", () => {
    const wrapper: Wrapper<Laedeli & { [key: string]: any }> = shallowMount(
      Laedeli,
      {
        data: () => {
          return {
            loading: true,
            error: false,
          };
        },
      }
    );

    const progress = wrapper.find("progress");
    expect(progress.exists()).toBe(true);
    const error = wrapper.find("div.is-danger");
    expect(error.exists()).toBe(false);
    const data = wrapper.find("#articles");
    expect(data.exists()).toBe(false);
  });

  it("load Success", async () => {
    const service = {
      getArticles: () => [],
    };

    const errorService = {
      report: jest.fn(),
    };

    const wrapper: Wrapper<
      Laedeli & { [key: string]: any }
    > = await shallowMount(Laedeli, {
      data: () => {
        return {
          service: service,
          errorService: errorService,
        };
      },
    });
    await wrapper.vm.loadArticles();

    const progress = wrapper.find("progress");
    expect(progress.exists()).toBe(false);
    const error = wrapper.find("div.is-danger");
    expect(error.exists()).toBe(false);
    const data = wrapper.find("#articles");
    expect(data.exists()).toBe(true);
  });

  it("load Error", async () => {
    const service = {
      getArticles: () => {
        throw new Error("SomeError");
      },
    };

    const errorService = {
      report: jest.fn(),
    };

    const wrapper: Wrapper<
      Laedeli & { [key: string]: any }
    > = await shallowMount(Laedeli, {
      data: () => {
        return {
          service: service,
          errorService: errorService,
        };
      },
    });
    await wrapper.vm.loadArticles();

    const progress = wrapper.find("progress");
    expect(progress.exists()).toBe(false);
    const error = wrapper.find("div.is-danger");
    expect(error.exists()).toBe(true);
    const data = wrapper.find("#articles");
    expect(data.exists()).toBe(false);
  });

  it("show form", async () => {
    const laedeliFormFunction = jest.fn();
    const laedeliForm = {
      showForm: () => laedeliFormFunction(),
    };

    const wrapper: Wrapper<
      Laedeli & { [key: string]: any }
    > = await shallowMount(Laedeli, {
      computed: {
        laedeliForm() {
          return laedeliForm;
        },
      },
    });
    wrapper.vm.showForm();

    expect(laedeliFormFunction.mock.calls.length).toBe(1);
  });
});
