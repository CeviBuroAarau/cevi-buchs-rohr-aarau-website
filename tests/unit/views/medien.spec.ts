import { mount } from "@vue/test-utils";
import Medien from "@/views/Medien.vue";

test("can be instantiated", () => {
  const wrapper = mount(Medien, {
    stubs: ["router-link", "font-awesome-icon"],
  });

  expect(wrapper.isVueInstance).toBeTruthy();
});
