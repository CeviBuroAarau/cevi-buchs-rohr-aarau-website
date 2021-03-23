import { mount } from "@vue/test-utils";
import LaedeliForm from "@/components/laedeli-form.vue";

test("can be instantiated", () => {
  const wrapper = mount(LaedeliForm, {
    stubs: ["router-link", "font-awesome-icon"],
  });

  expect(wrapper.isVueInstance).toBeTruthy();
});
