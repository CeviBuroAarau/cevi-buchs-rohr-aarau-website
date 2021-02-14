import { mount } from "@vue/test-utils";
import Leiterteam from "@/views/Leiterteam.vue";

test("can be instantiated", () => {
  const wrapper = mount(Leiterteam, {
    stubs: ["router-link", "font-awesome-icon"],
  });

  expect(wrapper.isVueInstance).toBeTruthy();
});
