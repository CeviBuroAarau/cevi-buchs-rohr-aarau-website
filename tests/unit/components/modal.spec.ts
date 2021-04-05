import { shallowMount, Wrapper } from "@vue/test-utils";
import Modal from "@/components/modal.vue";

describe("Modal Component", () => {
  test("render success", () => {
    const wrapper = shallowMount(Modal, {
      stubs: [],
      propsData: {
        title: "Titel",
        message: "Message",
        type: "success",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  test("renders error", () => {
    const wrapper = shallowMount(Modal, {
      stubs: [],
      propsData: {
        title: "Titel",
        message: "Message",
        type: "error",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  test("show", async () => {
    const wrapper: Wrapper<Modal & { [key: string]: any }> = shallowMount(
      Modal,
      {
        stubs: [],
        propsData: {
          title: "Titel",
          message: "Message",
          type: "error",
        },
      }
    );

    await wrapper.vm.open();

    const container = wrapper.find("div.is-active");
    expect(container.exists()).toBe(true);
  });

  test("close", async () => {
    const wrapper: Wrapper<Modal & { [key: string]: any }> = shallowMount(
      Modal,
      {
        stubs: [],
        propsData: {
          title: "Titel",
          message: "Message",
          type: "error",
        },
      }
    );

    await wrapper.vm.close();

    const container = wrapper.find("div.is-active");
    expect(container.exists()).toBe(false);
  });
});
