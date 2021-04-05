import { mount, shallowMount, Wrapper } from "@vue/test-utils";
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
    expect(mobileOpenChangedEmitted![0]).toEqual([true]);
  });
});
