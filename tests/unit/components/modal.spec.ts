import { shallowMount } from "@vue/test-utils";
import Modal from "@/components/modal.vue";

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
