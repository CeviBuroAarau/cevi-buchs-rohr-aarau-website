/* eslint-disable @typescript-eslint/no-explicit-any */
import { shallowMount } from "@vue/test-utils";
import Kontakt from "@/views/Kontakt.vue";

describe("Kontakt Page", () => {
  it("can be instantiated", () => {
    const wrapper = shallowMount(Kontakt, {});

    const content = wrapper.find("div.content");
    expect(content.exists()).toBe(true);
  });

  it("send Success", async () => {
    const service = {
      submitForm: vi.fn(),
    };

    const errorService = {
      report: vi.fn(),
    };

    const openErrorFunction = vi.fn();
    const openSuccessFunction = vi.fn();

    const wrapper = await shallowMount(Kontakt, {
      data: () => {
        return {
          service: service,
          errorService: errorService,
        };
      },
    } as any);

    (wrapper.vm.$ as any).refs = {
      successModal: { open: openSuccessFunction },
      errorModal: { open: openErrorFunction },
    };

    await (wrapper.vm as any).send();

    expect(openErrorFunction.mock.calls.length).toBe(0);
    expect(openSuccessFunction.mock.calls.length).toBe(1);
  });

  it("send error", async () => {
    const service = {
      submitForm: () => {
        throw new Error("SomeError");
      },
    };

    const errorService = {
      report: vi.fn(),
    };

    const openErrorFunction = vi.fn();
    const openSuccessFunction = vi.fn();

    const wrapper = await shallowMount(Kontakt, {
      data: () => {
        return {
          service: service,
          errorService: errorService,
        };
      },
    } as any);

    (wrapper.vm.$ as any).refs = {
      successModal: { open: openSuccessFunction },
      errorModal: { open: openErrorFunction },
    };

    await (wrapper.vm as any).send();

    expect(openErrorFunction.mock.calls.length).toBe(1);
    expect(openSuccessFunction.mock.calls.length).toBe(0);
  });
});
