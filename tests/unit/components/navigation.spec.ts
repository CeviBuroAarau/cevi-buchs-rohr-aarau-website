/* eslint-disable @typescript-eslint/no-explicit-any */
import { shallowMount, Wrapper } from "@vue/test-utils";
import Navigation from "@/components/navigation.vue";

describe("Navigation Component", () => {
  it("onMobileOpenChanged", async () => {
    const wrapper: Wrapper<Navigation & { [key: string]: any }> =
      await shallowMount(Navigation, {
        stubs: ["router-link"],
      });
    wrapper.vm.onMobileNaviagation();

    const mobileOpenChangedEmitted = wrapper.emitted().mobileOpenChanged;
    if (mobileOpenChangedEmitted !== undefined) {
      expect(mobileOpenChangedEmitted[0]).toEqual([false]);
    } else {
      fail();
    }
  });
});
