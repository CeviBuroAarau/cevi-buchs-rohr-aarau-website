import { shallowMount } from "@vue/test-utils";
import CeviSchweiz from "@/views/CeviSchweiz.vue";

describe("CeviSchweiz Page", () => {
  test("can be instantiated", () => {
    const wrapper = shallowMount(CeviSchweiz, {});

    const content = wrapper.find("p.content");
    expect(content.exists()).toBe(true);
  });
});
