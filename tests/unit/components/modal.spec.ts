import { shallowMount } from "@vue/test-utils";
import Modal from "@/components/modal.vue";

describe("Modal Component", () => {
  test("render success", () => {
    const wrapper = shallowMount(Modal, {
      props: {
        title: "Titel",
        message: "Message",
        type: "success",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  test("renders error", () => {
    const wrapper = shallowMount(Modal, {
      props: {
        title: "Titel",
        message: "Message",
        type: "error",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  test("show", async () => {
    const wrapper = shallowMount(Modal, {
      props: {
        title: "Titel",
        message: "Message",
        type: "error",
      },
    });

    await (wrapper.vm as any).open();

    const container = wrapper.find("div.is-active");
    expect(container.exists()).toBe(true);
  });

  test("close", async () => {
    const wrapper = shallowMount(Modal, {
      props: {
        title: "Titel",
        message: "Message",
        type: "error",
      },
    });

    await (wrapper.vm as any).close();

    const container = wrapper.find("div.is-active");
    expect(container.exists()).toBe(false);
  });
});
