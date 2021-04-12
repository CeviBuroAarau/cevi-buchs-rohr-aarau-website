import { shallowMount, Wrapper } from "@vue/test-utils";
import EventDetail from "@/components/event-detail.vue";

describe("EventDetail Component", () => {
  it("show info", async () => {
    const wrapper: Wrapper<
      EventDetail & { [key: string]: any }
    > = await shallowMount(EventDetail, {});
    await wrapper.vm.open({
      scope: "a",
      text: "b",
      date: new Date(),
    });

    const modal = wrapper.find("div.is-active");
    expect(modal.exists()).toBe(true);
  });

  it("hide info", async () => {
    const wrapper: Wrapper<
      EventDetail & { [key: string]: any }
    > = await shallowMount(EventDetail, {});
    await wrapper.vm.close();

    const modal = wrapper.find("div.is-active");
    expect(modal.exists()).toBe(false);
  });
});
