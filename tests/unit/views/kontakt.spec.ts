/* eslint-disable @typescript-eslint/no-explicit-any */
import { shallowMount, Wrapper } from "@vue/test-utils";
import Kontakt from "@/views/Kontakt.vue";

describe("Kontakt Page", () => {
  it("can be instantiated", () => {
    const wrapper = shallowMount(Kontakt, {});

    const content = wrapper.find("div.content");
    expect(content.exists()).toBe(true);
  });

  it("send Success", async () => {
    const service = {
      submitForm: jest.fn(),
    };

    const errorService = {
      report: jest.fn(),
    };

    const openErrorFunction = jest.fn();
    const errorModal = {
      open: () => openErrorFunction(),
    };

    const openSuccessFunction = jest.fn();
    const successModal = {
      open: () => openSuccessFunction(),
    };

    const wrapper: Wrapper<Kontakt & { [key: string]: any }> =
      await shallowMount(Kontakt, {
        data: () => {
          return {
            service: service,
            errorService: errorService,
          };
        },
        computed: {
          errorModal() {
            return errorModal;
          },
          successModal() {
            return successModal;
          },
        },
      });
    await wrapper.vm.send();

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
      report: jest.fn(),
    };

    const openErrorFunction = jest.fn();
    const errorModal = {
      open: () => openErrorFunction(),
    };

    const openSuccessFunction = jest.fn();
    const successModal = {
      open: () => openSuccessFunction(),
    };

    const wrapper: Wrapper<Kontakt & { [key: string]: any }> =
      await shallowMount(Kontakt, {
        data: () => {
          return {
            service: service,
            errorService: errorService,
          };
        },
        computed: {
          errorModal() {
            return errorModal;
          },
          successModal() {
            return successModal;
          },
        },
      });
    await wrapper.vm.send();

    expect(openErrorFunction.mock.calls.length).toBe(1);
    expect(openSuccessFunction.mock.calls.length).toBe(0);
  });
});
