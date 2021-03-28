import { shallowMount } from "@vue/test-utils";
import Interessierte from "@/views/Interessierte.vue";

describe("CeviSchweiz Page", () => {
  it("can be instantiated", () => {
    const wrapper = shallowMount(Interessierte, {
      stubs: ["router-link"],
    });

    const content = wrapper.find("p.content");
    expect(content.exists()).toBe(true);
  });
});
