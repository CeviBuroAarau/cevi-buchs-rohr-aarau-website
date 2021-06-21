/* eslint-disable @typescript-eslint/no-explicit-any */
import { shallowMount, Wrapper } from "@vue/test-utils";
import Front from "@/layouts/Front.vue";

describe("Front Layout", () => {
  it("onMobileOpenChanged", async () => {
    const wrapper: Wrapper<Front & { [key: string]: any }> = await shallowMount(
      Front,
      {
        stubs: ["router-link", "font-awesome-icon"],
      }
    );
    await wrapper.vm.onMobileOpenChanged(true);

    expect(wrapper.vm.$data.mobileOpen).toEqual(true);
  });
});
