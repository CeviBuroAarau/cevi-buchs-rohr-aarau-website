import { mount } from "@vue/test-utils";
import SchnuppernForm from "@/components/schnuppern-form.vue";

test("can be instantiated", () => {
  const wrapper = mount(SchnuppernForm, {
    stubs: ["router-link", "font-awesome-icon"],
  });

  expect(wrapper.isVueInstance).toBeTruthy();
});
