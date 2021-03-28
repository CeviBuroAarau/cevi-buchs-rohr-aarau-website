import { mount } from "@vue/test-utils";
import Spenden from "@/views/Spenden.vue";

describe("Spenden Page", () => {
  it("can be instantiated", () => {
    const wrapper = mount(Spenden, {
      stubs: ["router-link", "font-awesome-icon"],
    });

    const content = wrapper.find("p.content");
    expect(content.exists()).toBe(true);
  });
});
