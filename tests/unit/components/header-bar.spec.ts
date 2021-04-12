import { shallowMount, Wrapper } from "@vue/test-utils";
import HeaderBar from "@/components/header-bar.vue";

describe("HeaderBar Component", () => {
  it("onMobileOpenChanged", async () => {
    const wrapper: Wrapper<
      HeaderBar & { [key: string]: any }
    > = await shallowMount(HeaderBar, {
      stubs: ["router-link", "font-awesome-icon"],
    });
    wrapper.vm.onMobileOpenChanged();

    const mobileOpenChangedEmitted = wrapper.emitted().mobileOpenChanged;
    if (mobileOpenChangedEmitted === undefined) {
      fail("mobileOpenChangedEmitted mustn't be undefined");
    } else {
      expect(mobileOpenChangedEmitted.length).toBe(1);
      expect(mobileOpenChangedEmitted[0]).toEqual([true]);
    }
  });
});
