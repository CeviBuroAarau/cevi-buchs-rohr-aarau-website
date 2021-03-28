import { mount } from "@vue/test-utils";
import NotFound from "@/views/NotFound.vue";

describe("Cevianer Page", () => {
  it("can be instantiated", () => {
    const wrapper = mount(NotFound, {});

    const content = wrapper.find("p.content");
    expect(content.exists()).toBe(true);
  });
});
