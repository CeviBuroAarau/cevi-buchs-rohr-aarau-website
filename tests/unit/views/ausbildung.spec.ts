import { shallowMount } from "@vue/test-utils";
import Ausbildung from "@/views/Ausbildung.vue";

describe("Ausbildung Page", () => {
  it("can be instantiated", () => {
    const wrapper = shallowMount(Ausbildung, {});

    const content = wrapper.find("div.content");
    expect(content.exists()).toBe(true);
  });
});
