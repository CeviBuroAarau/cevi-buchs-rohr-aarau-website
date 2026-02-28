/* eslint-disable @typescript-eslint/no-explicit-any */
import { shallowMount } from "@vue/test-utils";
import Navigation from "@/components/navigation.vue";

describe("Navigation Component", () => {
  it("onMobileOpenChanged", async () => {
    const wrapper = await shallowMount(Navigation, {
      global: {
        stubs: ["router-link"],
      },
    });
    (wrapper.vm as any).onMobileNaviagation();

    const mobileOpenChangedEmitted = wrapper.emitted().mobileOpenChanged;
    if (mobileOpenChangedEmitted === undefined) {
      fail("mobileOpenChanged mustn't be undefined");
    } else {
      expect(mobileOpenChangedEmitted.length).toBe(1);
      expect(mobileOpenChangedEmitted[0]).toEqual([false]);
    }
  });
});
