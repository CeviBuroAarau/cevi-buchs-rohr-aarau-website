/* eslint-disable @typescript-eslint/no-explicit-any */
import { shallowMount, Wrapper } from "@vue/test-utils";
import Medien from "@/views/Medien.vue";

describe("Medien Page", () => {
  it("check loading message", () => {
    const wrapper: Wrapper<Medien & { [key: string]: any }> = shallowMount(
      Medien,
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
    const data = wrapper.find("#medialist");
    expect(data.exists()).toBe(false);
  });

  it("check error message", () => {
    const wrapper: Wrapper<Medien & { [key: string]: any }> = shallowMount(
      Medien,
      {
        data: () => {
          return {
            loading: false,
            error: true,
          };
        },
      }
    );

    const progress = wrapper.find("progress");
    expect(progress.exists()).toBe(false);
    const error = wrapper.find("div.is-danger");
    expect(error.exists()).toBe(true);
    const data = wrapper.find("#medialist");
    expect(data.exists()).toBe(false);
  });

  it("check data", () => {
    const wrapper: Wrapper<Medien & { [key: string]: any }> = shallowMount(
      Medien,
      {
        data: () => {
          return {
            loading: false,
            error: false,
          };
        },
      }
    );

    const progress = wrapper.find("progress");
    expect(progress.exists()).toBe(false);
    const error = wrapper.find("div.is-danger");
    expect(error.exists()).toBe(false);
    const data = wrapper.find("#medialist");
    expect(data.exists()).toBe(true);
  });

  it("load Success", async () => {
    const mediaService = {
      getChronic: () => [],
      getNews: () => [],
    };

    const errorService = {
      report: jest.fn(),
    };

    const wrapper: Wrapper<Medien & { [key: string]: any }> =
      await shallowMount(Medien, {
        data: () => {
          return {
            service: mediaService,
            errorService: errorService,
          };
        },
      });
    await wrapper.vm.loadChronics();
    await wrapper.vm.loadNews();

    const progress = wrapper.find("progress");
    expect(progress.exists()).toBe(false);
    const error = wrapper.find("div.is-danger");
    expect(error.exists()).toBe(false);
    const data = wrapper.find("#medialist");
    expect(data.exists()).toBe(true);
  });

  it("load Error", async () => {
    const mediaService = {
      getChronic: () => {
        throw new Error("SomeError");
      },
      getNews: () => {
        throw new Error("SomeError");
      },
    };

    const errorService = {
      report: jest.fn(),
    };

    const wrapper: Wrapper<Medien & { [key: string]: any }> =
      await shallowMount(Medien, {
        data: () => {
          return {
            service: mediaService,
            errorService: errorService,
          };
        },
      });
    await wrapper.vm.loadChronics();
    await wrapper.vm.loadNews();

    const progress = wrapper.find("progress");
    expect(progress.exists()).toBe(false);
    const error = wrapper.find("div.is-danger");
    expect(error.exists()).toBe(true);
    const data = wrapper.find("#medialist");
    expect(data.exists()).toBe(false);
  });
});
