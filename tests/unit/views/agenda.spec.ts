import { mount } from "@vue/test-utils";
import AgendaView from "@/views/AgendaView.vue";

test("can be instantiated", () => {
  const wrapper = mount(AgendaView, {
    stubs: ["router-link", "font-awesome-icon"],
  });

  expect(wrapper.isVueInstance).toBeTruthy();
});
