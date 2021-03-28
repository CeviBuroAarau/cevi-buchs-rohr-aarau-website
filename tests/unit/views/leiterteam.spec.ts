import { shallowMount, Wrapper } from "@vue/test-utils";
import Leiterteam from "@/views/Leiterteam.vue";

describe("Leiterteam Page", () => {
  it("check loading message", () => {
    const wrapper: Wrapper<Leiterteam & { [key: string]: any }> = shallowMount(
      Leiterteam,
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
    const data = wrapper.find("#leaders");
    expect(data.exists()).toBe(false);
  });

  it("load Success", async () => {
    const service = {
      getLeaders: () => [],
    };

    const errorService = {
      report: jest.fn(),
    };

    const wrapper: Wrapper<
      Leiterteam & { [key: string]: any }
    > = await shallowMount(Leiterteam, {
      data: () => {
        return {
          service: service,
          errorService: errorService,
        };
      },
    });
    await wrapper.vm.loadLeaders();

    const progress = wrapper.find("progress");
    expect(progress.exists()).toBe(false);
    const error = wrapper.find("div.is-danger");
    expect(error.exists()).toBe(false);
    const data = wrapper.find("#leaders");
    expect(data.exists()).toBe(true);
  });

  it("load Error", async () => {
    const service = {
      getLeaders: () => {
        throw new Error("SomeError");
      },
    };

    const errorService = {
      report: jest.fn(),
    };

    const wrapper: Wrapper<
      Leiterteam & { [key: string]: any }
    > = await shallowMount(Leiterteam, {
      data: () => {
        return {
          service: service,
          errorService: errorService,
        };
      },
    });
    await wrapper.vm.loadLeaders();

    const progress = wrapper.find("progress");
    expect(progress.exists()).toBe(false);
    const error = wrapper.find("div.is-danger");
    expect(error.exists()).toBe(true);
    const data = wrapper.find("#leaders");
    expect(data.exists()).toBe(false);
  });
});
