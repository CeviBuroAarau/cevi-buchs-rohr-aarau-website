import { mount } from "@vue/test-utils";
import Datenschutzinformation from "@/views/Datenschutzinformation.vue";

describe("Datenschutzinformation Page", () => {
  it("can be instantiated", () => {
    const wrapper = mount(Datenschutzinformation, {
      stubs: ["router-link"],
    });

    const content = wrapper.find("p.content");
    expect(content.exists()).toBe(true);
  });
});
