import { mount } from "@vue/test-utils";
import Kontakt from "@/views/Kontakt.vue";

test("can be instantiated", () => {
  const wrapper = mount(Kontakt, {
    stubs: ["router-link", "font-awesome-icon"],
  });

  expect(wrapper.isVueInstance).toBeTruthy();
});
