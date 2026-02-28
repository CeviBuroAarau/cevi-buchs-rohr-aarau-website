/* eslint-disable @typescript-eslint/no-explicit-any */
import { shallowMount } from "@vue/test-utils";
import Front from "@/layouts/Front.vue";

describe("Front Layout", () => {
  it("onMobileOpenChanged", async () => {
    const wrapper = await shallowMount(Front, {
      global: {
        stubs: ["router-link", "font-awesome-icon"],
      },
    });
    await (wrapper.vm as any).onMobileOpenChanged(true);

    expect((wrapper.vm as any).mobileOpen).toEqual(true);
  });
});
