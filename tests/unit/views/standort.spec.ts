import { mount } from "@vue/test-utils";
import Standort from "@/views/Standort.vue";

test("can be instantiated", () => {
  const wrapper = mount(Standort, {
    stubs: ["router-link", "font-awesome-icon"],
  });

  expect(wrapper.isVueInstance).toBeTruthy();
});
