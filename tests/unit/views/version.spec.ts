import { mount } from "@vue/test-utils";
import Version from "@/views/Version.vue";

test("can be instantiated", () => {
  const wrapper = mount(Version, {
    stubs: ["router-link", "font-awesome-icon"],
  });

  expect(wrapper.isVueInstance).toBeTruthy();
});
