import { mount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App", () => {
  it("can be instantiated", () => {
    const wrapper = mount(App, {
      global: {
        stubs: ["router-view"],
      },
    });

    expect(wrapper.vm).toBeTruthy();
  });
});
