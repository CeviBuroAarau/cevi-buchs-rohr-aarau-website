import { mount } from "@vue/test-utils";
import CeviSchweiz from "@/views/CeviSchweiz.vue";

test("can be instantiated", () => {
  const wrapper = mount(CeviSchweiz, {
    stubs: ["router-link", "font-awesome-icon"],
  });

  expect(wrapper.isVueInstance).toBeTruthy();
});
