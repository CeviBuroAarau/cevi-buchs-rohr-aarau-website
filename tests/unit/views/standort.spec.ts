import { mount } from "@vue/test-utils";
import Standort from "@/views/Standort.vue";

describe("Standort Page", () => {
  it("can be instantiated", () => {
    const wrapper = mount(Standort, {
      stubs: ["router-link"],
    });

    const content = wrapper.find("p.content");
    expect(content.exists()).toBe(true);
  });
});
