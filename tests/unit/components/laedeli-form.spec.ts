import { shallowMount, Wrapper } from "@vue/test-utils";
import LaedeliForm from "@/components/laedeli-form.vue";
import { LaedeliFormState } from "@/types";

describe("LaedeliForm Component", () => {
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

    const wrapper: Wrapper<
      LaedeliForm & { [key: string]: any }
    > = await shallowMount(LaedeliForm, {
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
    await wrapper.vm.order();

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

    const wrapper: Wrapper<
      LaedeliForm & { [key: string]: any }
    > = await shallowMount(LaedeliForm, {
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
    await wrapper.vm.order();

    expect(openErrorFunction.mock.calls.length).toBe(1);
    expect(openSuccessFunction.mock.calls.length).toBe(0);
  });

  it("show Form", async () => {
    const service = {
      submitForm: jest.fn(),
    };

    const errorService = {
      report: jest.fn(),
    };

    const wrapper: Wrapper<
      LaedeliForm & { [key: string]: any }
    > = await shallowMount(LaedeliForm, {
      data: () => {
        return {
          service: service,
          errorService: errorService,
        };
      },
    });
    await wrapper.vm.showForm();

    expect(wrapper.vm.state).toBe(LaedeliFormState.Displayed);
  });

  it("close Form", async () => {
    const service = {
      submitForm: jest.fn(),
    };

    const errorService = {
      report: jest.fn(),
    };

    const wrapper: Wrapper<
      LaedeliForm & { [key: string]: any }
    > = await shallowMount(LaedeliForm, {
      data: () => {
        return {
          service: service,
          errorService: errorService,
        };
      },
    });
    await wrapper.vm.close();

    expect(wrapper.vm.state).toBe(LaedeliFormState.NotDisplayed);
  });
});
