/* eslint-disable @typescript-eslint/no-explicit-any */
import { shallowMount } from "@vue/test-utils";
import SchnuppernForm from "@/components/schnuppern-form.vue";

describe("SchnuppernForm Component", () => {
  it("subscribe Success", async () => {
    const service = {
      submitForm: jest.fn(),
    };

    const errorService = {
      report: jest.fn(),
    };

    const wrapper = await shallowMount(SchnuppernForm, {
      data: () => {
        return {
          service: service,
          errorService: errorService,
        };
      },
    } as any);

    // Mock the modal refs on the internal instance
    const openSuccessFunction = jest.fn();
    const openErrorFunction = jest.fn();
    (wrapper.vm.$ as any).refs = {
      successModal: { open: openSuccessFunction },
      errorModal: { open: openErrorFunction },
    };

    await (wrapper.vm as any).subscribe();

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

    const wrapper = await shallowMount(SchnuppernForm, {
      data: () => {
        return {
          service: service,
          errorService: errorService,
        };
      },
    } as any);

    const openSuccessFunction = jest.fn();
    const openErrorFunction = jest.fn();
    (wrapper.vm.$ as any).refs = {
      successModal: { open: openSuccessFunction },
      errorModal: { open: openErrorFunction },
    };

    await (wrapper.vm as any).subscribe();

    expect(openErrorFunction.mock.calls.length).toBe(1);
    expect(openSuccessFunction.mock.calls.length).toBe(0);
  });

  it("show form", async () => {
    const wrapper = await shallowMount(SchnuppernForm, {});
    await (wrapper.vm as any).showSubscriptionForm();

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
    const wrapper = await shallowMount(SchnuppernForm, {});
    await (wrapper.vm as any).close();

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
