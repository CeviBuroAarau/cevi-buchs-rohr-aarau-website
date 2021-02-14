import { mount } from "@vue/test-utils";
import Home from "@/components/home.vue";

test("can be instantiated", () => {
  const wrapper = mount(Home, {
    stubs: ["router-link", "font-awesome-icon"],
  });

  expect(wrapper.isVueInstance).toBeTruthy();
});
