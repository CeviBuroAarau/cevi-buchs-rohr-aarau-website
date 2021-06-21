/* eslint-disable @typescript-eslint/no-explicit-any */
import { shallowMount, Wrapper } from "@vue/test-utils";
import EventDetail from "@/components/event-detail.vue";

describe("EventDetail Component", () => {
  it("show info", async () => {
    const wrapper: Wrapper<EventDetail & { [key: string]: any }> =
      await shallowMount(EventDetail, {});
    await wrapper.vm.open({
      scope: "a",
      text: "b",
      date: new Date(),
    });

    const modal = wrapper.find("div.is-active");
    expect(modal.exists()).toBe(true);

    const onEventOpenedEmitted = wrapper.emitted().onEventOpened;
    if (onEventOpenedEmitted === undefined) {
      fail("onEventOpened mustn't be undefined");
    } else {
      expect(onEventOpenedEmitted.length).toBe(1);
    }
  });

  it("hide info", async () => {
    const wrapper: Wrapper<EventDetail & { [key: string]: any }> =
      await shallowMount(EventDetail, {});
    await wrapper.vm.close();

    const modal = wrapper.find("div.is-active");
    expect(modal.exists()).toBe(false);

    const onEventClosedEmitted = wrapper.emitted().onEventClosed;
    if (onEventClosedEmitted === undefined) {
      fail("onEventClosed mustn't be undefined");
    } else {
      expect(onEventClosedEmitted.length).toBe(1);
    }
  });
});
