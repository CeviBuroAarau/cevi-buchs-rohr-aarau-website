import { mount } from "@vue/test-utils";
import Navigation from "@/components/navigation.vue";

test("can be instantiated", () => {
  const wrapper = mount(Navigation, {
    stubs: ["router-link", "font-awesome-icon"],
  });

  expect(wrapper.isVueInstance).toBeTruthy();
});
