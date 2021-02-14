import { mount } from "@vue/test-utils";
import Agenda from "@/views/Agenda.vue";

test("can be instantiated", () => {
  const wrapper = mount(Agenda, {
    stubs: ["router-link", "font-awesome-icon"],
  });

  expect(wrapper.isVueInstance).toBeTruthy();
});
