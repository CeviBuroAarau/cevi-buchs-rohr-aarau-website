import { mount } from "@vue/test-utils";
import Album from "@/views/Album.vue";

test("can be instantiated", () => {
  const wrapper = mount(Album, {
    stubs: ["router-link", "font-awesome-icon"],
  });

  expect(wrapper.isVueInstance).toBeTruthy();
});
