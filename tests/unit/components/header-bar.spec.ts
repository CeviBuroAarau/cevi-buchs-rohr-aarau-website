import { mount } from "@vue/test-utils";
import HeaderBar from "@/components/header-bar.vue";

test("can be instantiated", () => {
  const wrapper = mount(HeaderBar, {
    stubs: ["router-link", "font-awesome-icon"],
  });

  expect(wrapper.isVueInstance).toBeTruthy();
});
