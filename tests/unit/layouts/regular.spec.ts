import { shallowMount } from "@vue/test-utils";
import Regular from "@/layouts/Regular.vue";

describe("Regular Layout", () => {
  it("onMobileOpenChanged", async () => {
    const wrapper = await shallowMount(Regular, {
      global: {
        stubs: ["router-link", "router-view", "font-awesome-icon"],
      },
    });
    await (wrapper.vm as any).onMobileOpenChanged(true);

    expect((wrapper.vm as any).mobileOpen).toEqual(true);
  });
});
