/* eslint-disable @typescript-eslint/no-explicit-any */
import { shallowMount } from "@vue/test-utils";
import HeaderBar from "@/components/header-bar.vue";

describe("HeaderBar Component", () => {
  it("onMobileOpenChanged", async () => {
    const wrapper = await shallowMount(HeaderBar, {
      global: {
        stubs: ["router-link", "font-awesome-icon"],
      },
    });
    (wrapper.vm as any).onMobileOpenChanged();

    const mobileOpenChangedEmitted = wrapper.emitted().mobileOpenChanged;
    if (mobileOpenChangedEmitted === undefined) {
      expect.unreachable("mobileOpenChangedEmitted mustn't be undefined");
    } else {
      expect(mobileOpenChangedEmitted.length).toBe(1);
      expect(mobileOpenChangedEmitted[0]).toEqual([true]);
    }
  });
});
