import { mount } from "@vue/test-utils";
import Aktivitaeten from "@/views/Aktivitaeten.vue";

test("can be instantiated", () => {
  const wrapper = mount(Aktivitaeten, {
    stubs: ["router-link", "font-awesome-icon"],
  });

  expect(wrapper.isVueInstance).toBeTruthy();
});
