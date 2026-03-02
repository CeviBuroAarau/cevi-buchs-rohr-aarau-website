import { shallowMount } from "@vue/test-utils";
import Leiterteam from "@/views/Leiterteam.vue";

describe("Leiterteam Page", () => {
  it("check loading message", () => {
    const wrapper = shallowMount(Leiterteam, {
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
    const data = wrapper.find("#leaders");
    expect(data.exists()).toBe(false);
  });

  it("load Success", async () => {
    const service = {
      getLeaders: () => [],
    };

    const errorService = {
      report: vi.fn(),
    };

    const wrapper = await shallowMount(Leiterteam, {
      data: () => {
        return {
          service: service,
          errorService: errorService,
        };
      },
    } as any);
    await (wrapper.vm as any).loadLeaders();

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
      report: vi.fn(),
    };

    const wrapper = await shallowMount(Leiterteam, {
      data: () => {
        return {
          service: service,
          errorService: errorService,
        };
      },
    } as any);
    await (wrapper.vm as any).loadLeaders();

    const progress = wrapper.find("progress");
    expect(progress.exists()).toBe(false);
    const error = wrapper.find("div.is-danger");
    expect(error.exists()).toBe(true);
    const data = wrapper.find("#leaders");
    expect(data.exists()).toBe(false);
  });
});
