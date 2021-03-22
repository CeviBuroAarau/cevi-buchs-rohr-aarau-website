import { mount } from "@vue/test-utils";
import Spenden from "@/views/Spenden.vue";

test("can be instantiated", () => {
  const wrapper = mount(Spenden, {
    stubs: ["router-link", "font-awesome-icon"],
  });

  expect(wrapper.isVueInstance).toBeTruthy();
});
