import { mount } from "@vue/test-utils";
import Laedeli from "@/views/Laedeli.vue";

test("can be instantiated", () => {
  const wrapper = mount(Laedeli, {
    stubs: ["router-link", "font-awesome-icon"],
  });

  expect(wrapper.isVueInstance).toBeTruthy();
});
