/* eslint-disable @typescript-eslint/no-explicit-any */
import { shallowMount, Wrapper } from "@vue/test-utils";
import Aktivitaeten from "@/views/Aktivitaeten.vue";

describe("Aktivitaeten Page", () => {
  it("check loading message", () => {
    const wrapper: Wrapper<Aktivitaeten & { [key: string]: any }> =
      shallowMount(Aktivitaeten, {
        data: () => {
          return {
            loading: true,
            error: false,
          };
        },
      });

    const progress = wrapper.find("progress");
    expect(progress.exists()).toBe(true);
    const error = wrapper.find("div.is-danger");
    expect(error.exists()).toBe(false);
    const data = wrapper.find("#gallery");
    expect(data.exists()).toBe(false);
  });

  it("load Success", async () => {
    const service = {
      getActivities: () => [],
    };

    const errorService = {
      report: jest.fn(),
    };

    const wrapper: Wrapper<Aktivitaeten & { [key: string]: any }> =
      await shallowMount(Aktivitaeten, {
        data: () => {
          return {
            service: service,
            errorService: errorService,
          };
        },
      });
    await wrapper.vm.loadActivities();

    const progress = wrapper.find("progress");
    expect(progress.exists()).toBe(false);
    const error = wrapper.find("div.is-danger");
    expect(error.exists()).toBe(false);
    const data = wrapper.find("#gallery");
    expect(data.exists()).toBe(true);
  });

  it("load Error", async () => {
    const service = {
      getActivities: () => {
        throw new Error("SomeError");
      },
    };

    const errorService = {
      report: jest.fn(),
    };

    const wrapper: Wrapper<Aktivitaeten & { [key: string]: any }> =
      await shallowMount(Aktivitaeten, {
        data: () => {
          return {
            service: service,
            errorService: errorService,
          };
        },
      });
    await wrapper.vm.loadActivities();

    const progress = wrapper.find("progress");
    expect(progress.exists()).toBe(false);
    const error = wrapper.find("div.is-danger");
    expect(error.exists()).toBe(true);
    const data = wrapper.find("#gallery");
    expect(data.exists()).toBe(false);
  });
});
