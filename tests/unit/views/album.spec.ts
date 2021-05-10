/* eslint-disable @typescript-eslint/no-explicit-any */
import { shallowMount, Wrapper } from "@vue/test-utils";
import Album from "@/views/Album.vue";

describe("Aktivitaeten Page", () => {
  it("check loading message", () => {
    const wrapper: Wrapper<Album & { [key: string]: any }> = shallowMount(
      Album,
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
    const data = wrapper.find("#album");
    expect(data.exists()).toBe(false);
  });

  it("load Success", async () => {
    const service = {
      getAlbums: () => [],
    };

    const errorService = {
      report: jest.fn(),
    };

    const wrapper: Wrapper<Album & { [key: string]: any }> = await shallowMount(
      Album,
      {
        data: () => {
          return {
            service: service,
            errorService: errorService,
          };
        },
      }
    );
    await wrapper.vm.loadAlbums();

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
      report: jest.fn(),
    };

    const wrapper: Wrapper<Album & { [key: string]: any }> = await shallowMount(
      Album,
      {
        data: () => {
          return {
            service: service,
            errorService: errorService,
          };
        },
      }
    );
    await wrapper.vm.loadAlbums();

    const progress = wrapper.find("progress");
    expect(progress.exists()).toBe(false);
    const error = wrapper.find("div.is-danger");
    expect(error.exists()).toBe(true);
    const data = wrapper.find("#album");
    expect(data.exists()).toBe(false);
  });
});
