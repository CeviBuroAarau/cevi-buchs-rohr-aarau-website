import { shallowMount, Wrapper } from "@vue/test-utils";
import Regular from "@/layouts/Regular.vue";

describe("Regular Layout", () => {
  it("onMobileOpenChanged", async () => {
    const wrapper: Wrapper<
      Regular & { [key: string]: any }
    > = await shallowMount(Regular, {
      stubs: ["router-link", "router-view", "font-awesome-icon"],
    });
    await wrapper.vm.onMobileOpenChanged(true);

    expect(wrapper.vm.$data.mobileOpen).toEqual(true);
  });
});
