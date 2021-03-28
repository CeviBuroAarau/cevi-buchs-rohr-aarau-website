import { mount } from "@vue/test-utils";
import Version from "@/views/Version.vue";

describe("Version Page", () => {
  it("can be instantiated", () => {
    const wrapper = mount(Version, {});

    const content = wrapper.find("p.content");
    expect(content.exists()).toBe(true);
  });
});
