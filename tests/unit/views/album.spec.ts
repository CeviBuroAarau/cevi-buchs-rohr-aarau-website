/* eslint-disable @typescript-eslint/no-explicit-any */
import { shallowMount } from "@vue/test-utils";
import Album from "@/views/Album.vue";

describe("Aktivitaeten Page", () => {
  it("check loading message", () => {
    const wrapper = shallowMount(Album, {
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
    const data = wrapper.find("#album");
    expect(data.exists()).toBe(false);
  });

  it("load Success", async () => {
    const service = {
      getAlbums: () => [],
    };

    const errorService = {
      report: vi.fn(),
    };

    const wrapper = await shallowMount(Album, {
      data: () => {
        return {
          service: service,
          errorService: errorService,
        };
      },
    } as any);
    await (wrapper.vm as any).loadAlbums();

    const progress = wrapper.find("progress");
    expect(progress.exists()).toBe(false);
    const error = wrapper.find("div.is-danger");
    expect(error.exists()).toBe(false);
    const data = wrapper.find("#album");
    expect(data.exists()).toBe(true);
  });

  it("load Error", async () => {
    const service = {
      getAlbums: () => {
        throw new Error("SomeError");
      },
    };

    const errorService = {
      report: vi.fn(),
    };

    const wrapper = await shallowMount(Album, {
      data: () => {
        return {
          service: service,
          errorService: errorService,
        };
      },
    } as any);
    await (wrapper.vm as any).loadAlbums();

    const progress = wrapper.find("progress");
    expect(progress.exists()).toBe(false);
    const error = wrapper.find("div.is-danger");
    expect(error.exists()).toBe(true);
    const data = wrapper.find("#album");
    expect(data.exists()).toBe(false);
  });
});
