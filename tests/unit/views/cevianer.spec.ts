import { mount } from "@vue/test-utils";
import Cevianer from "@/views/Aktivitaeten.vue";

test("can be instantiated", () => {
  const wrapper = mount(Cevianer, {
    stubs: ["router-link", "font-awesome-icon"],
  });

  expect(wrapper.isVueInstance).toBeTruthy();
});
