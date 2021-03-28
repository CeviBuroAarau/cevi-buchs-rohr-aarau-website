import { shallowMount } from "@vue/test-utils";
import Cevianer from "@/views/Cevianer.vue";

describe("Cevianer Page", () => {
  it("can be instantiated", () => {
    const wrapper = shallowMount(Cevianer, {
      stubs: ["router-link"],
    });

    const content = wrapper.find("p.content");
    expect(content.exists()).toBe(true);
  });
});
