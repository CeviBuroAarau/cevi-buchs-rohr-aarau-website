/* eslint-disable @typescript-eslint/no-explicit-any */
import { shallowMount, Wrapper } from "@vue/test-utils";
import SchnuppernForm from "@/components/schnuppern-form.vue";

describe("SchnuppernForm Component", () => {
  it("subscribe Success", async () => {
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

    const wrapper: Wrapper<SchnuppernForm & { [key: string]: any }> =
      await shallowMount(SchnuppernForm, {
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
    await wrapper.vm.subscribe();

    expect(openErrorFunction.mock.calls.length).toBe(0);
    expect(openSuccessFunction.mock.calls.length).toBe(1);
  });

  it("subscribe error", async () => {
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

    const wrapper: Wrapper<SchnuppernForm & { [key: string]: any }> =
      await shallowMount(SchnuppernForm, {
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
    await wrapper.vm.subscribe();

    expect(openErrorFunction.mock.calls.length).toBe(1);
    expect(openSuccessFunction.mock.calls.length).toBe(0);
  });

  it("show form", async () => {
    const wrapper: Wrapper<SchnuppernForm & { [key: string]: any }> =
      await shallowMount(SchnuppernForm, {});
    await wrapper.vm.showSubscriptionForm();

    const modal = wrapper.find("div.is-active");
    expect(modal.exists()).toBe(true);

    const onFormOpenedEmitted = wrapper.emitted().onFormOpened;
    if (onFormOpenedEmitted === undefined) {
      fail("onFormOpened mustn't be undefined");
    } else {
      expect(onFormOpenedEmitted.length).toBe(1);
    }
  });

  it("close form", async () => {
    const wrapper: Wrapper<SchnuppernForm & { [key: string]: any }> =
      await shallowMount(SchnuppernForm, {});
    await wrapper.vm.close();

    const modal = wrapper.find("div.is-active");
    expect(modal.exists()).toBe(false);

    const onFormClosedEmitted = wrapper.emitted().onFormClosed;
    if (onFormClosedEmitted === undefined) {
      fail("onFormOpened mustn't be undefined");
    } else {
      expect(onFormClosedEmitted.length).toBe(1);
    }
  });
});
