import { mount } from "@vue/test-utils";
import EventList from "@/components/event-list.vue";

test("can be instantiated", () => {
  const wrapper = mount(EventList, {
    stubs: ["router-link", "font-awesome-icon"],
  });

  expect(wrapper.isVueInstance).toBeTruthy();
});
