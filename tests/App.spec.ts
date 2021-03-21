import { mount } from "@vue/test-utils";
import App from "@/App.vue";

test("can be instantiated", () => {
  const wrapper = mount(App, {
    stubs: ["router-link", "font-awesome-icon"],
  });

  expect(wrapper.isVueInstance).toBeTruthy();
});
