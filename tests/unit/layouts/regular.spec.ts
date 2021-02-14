import { mount } from "@vue/test-utils";
import Regular from "@/layouts/Regular.vue";

test("can be instantiated", () => {
  const wrapper = mount(Regular, {
    stubs: ["router-link", "router-view", "font-awesome-icon"],
  });

  expect(wrapper.isVueInstance).toBeTruthy();
});
