import { shallowMount } from "@vue/test-utils";
import Laedeli from "@/views/Laedeli.vue";

const globalStubs = {
  global: {
    stubs: { FontAwesomeIcon: true },
  },
};

describe("Lädeli Page", () => {
  it("check loading message", () => {
    const wrapper = shallowMount(Laedeli, {
      ...globalStubs,
      data: () => {
        return {
          loading: true,
          error: false,
        };
      },
    } as any);

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
      report: vi.fn(),
    };

    const wrapper = await shallowMount(Laedeli, {
      ...globalStubs,
      data: () => {
        return {
          service: service,
          errorService: errorService,
        };
      },
    } as any);
    await (wrapper.vm as any).loadArticles();

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
      report: vi.fn(),
    };

    const wrapper = await shallowMount(Laedeli, {
      ...globalStubs,
      data: () => {
        return {
          service: service,
          errorService: errorService,
        };
      },
    } as any);
    await (wrapper.vm as any).loadArticles();

    const progress = wrapper.find("progress");
    expect(progress.exists()).toBe(false);
    const error = wrapper.find("div.is-danger");
    expect(error.exists()).toBe(true);
    const data = wrapper.find("#articles");
    expect(data.exists()).toBe(false);
  });

  it("show form", async () => {
    const laedeliFormFunction = vi.fn();

    const wrapper = await shallowMount(Laedeli, { ...globalStubs });

    (wrapper.vm.$ as any).refs = {
      laedeliForm: { showForm: laedeliFormFunction },
    };

    (wrapper.vm as any).showForm();

    expect(laedeliFormFunction.mock.calls.length).toBe(1);
  });
});
