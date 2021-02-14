import { mount } from "@vue/test-utils";
import Interessierte from "@/views/Interessierte.vue";

test("can be instantiated", () => {
  const wrapper = mount(Interessierte, {
    stubs: ["router-link", "font-awesome-icon"],
  });

  expect(wrapper.isVueInstance).toBeTruthy();
});
