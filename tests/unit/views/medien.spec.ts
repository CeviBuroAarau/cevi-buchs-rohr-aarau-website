/* eslint-disable @typescript-eslint/no-explicit-any */
import { shallowMount } from "@vue/test-utils";
import Medien from "@/views/Medien.vue";

describe("Medien Page", () => {
  it("check loading message", () => {
    const wrapper = shallowMount(Medien, {
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
    const data = wrapper.find("#medialist");
    expect(data.exists()).toBe(false);
  });

  it("check error message", () => {
    const wrapper = shallowMount(Medien, {
      data: () => {
        return {
          loading: false,
          error: true,
        };
      },
    } as any);

    const progress = wrapper.find("progress");
    expect(progress.exists()).toBe(false);
    const error = wrapper.find("div.is-danger");
    expect(error.exists()).toBe(true);
    const data = wrapper.find("#medialist");
    expect(data.exists()).toBe(false);
  });

  it("check data", () => {
    const wrapper = shallowMount(Medien, {
      data: () => {
        return {
          loading: false,
          error: false,
        };
      },
    } as any);

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
      report: vi.fn(),
    };

    const wrapper = await shallowMount(Medien, {
      data: () => {
        return {
          service: mediaService,
          errorService: errorService,
        };
      },
    } as any);
    await (wrapper.vm as any).loadChronics();
    await (wrapper.vm as any).loadNews();

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
      report: vi.fn(),
    };

    const wrapper = await shallowMount(Medien, {
      data: () => {
        return {
          service: mediaService,
          errorService: errorService,
        };
      },
    } as any);
    await (wrapper.vm as any).loadChronics();
    await (wrapper.vm as any).loadNews();

    const progress = wrapper.find("progress");
    expect(progress.exists()).toBe(false);
    const error = wrapper.find("div.is-danger");
    expect(error.exists()).toBe(true);
    const data = wrapper.find("#medialist");
    expect(data.exists()).toBe(false);
  });
});
