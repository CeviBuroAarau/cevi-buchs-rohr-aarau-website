import { mount } from "@vue/test-utils";
import Front from "@/layouts/Front.vue";

test("can be instantiated", () => {
  const wrapper = mount(Front, {
    stubs: ["router-link", "font-awesome-icon"],
  });

  expect(wrapper.isVueInstance).toBeTruthy();
});
