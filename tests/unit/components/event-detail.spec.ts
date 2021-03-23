import { mount } from "@vue/test-utils";
import EventDetail from "@/components/event-detail.vue";

test("can be instantiated", () => {
  const wrapper = mount(EventDetail, {
    stubs: ["router-link", "font-awesome-icon"],
  });

  expect(wrapper.isVueInstance).toBeTruthy();
});
