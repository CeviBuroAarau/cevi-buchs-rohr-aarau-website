import { mount } from "@vue/test-utils";
import NotFound from "@/views/NotFound.vue";

test("can be instantiated", () => {
  const wrapper = mount(NotFound, {
    stubs: ["router-link", "font-awesome-icon"],
  });

  expect(wrapper.isVueInstance).toBeTruthy();
});
