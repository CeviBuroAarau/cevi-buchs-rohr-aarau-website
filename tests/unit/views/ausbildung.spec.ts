import { mount } from "@vue/test-utils";
import Ausbildung from "@/views/Ausbildung.vue";

test("can be instantiated", () => {
  const wrapper = mount(Ausbildung, {
    stubs: ["router-link", "font-awesome-icon"],
  });

  expect(wrapper.isVueInstance).toBeTruthy();
});
