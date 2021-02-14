import { mount } from "@vue/test-utils";
import Schnuppern from "@/views/Schnuppern.vue";

test("can be instantiated", () => {
  const wrapper = mount(Schnuppern, {
    stubs: ["router-link", "font-awesome-icon"],
  });

  expect(wrapper.isVueInstance).toBeTruthy();
});
