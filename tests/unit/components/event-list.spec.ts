import { shallowMount } from "@vue/test-utils";
import EventList from "@/components/event-list.vue";
import { EventInfo } from "@/types";

describe("EventList Component", () => {
  it("load Success", async () => {
    const service = {
      getEventInfo: () => [
        {
          scope: "section",
          text: "b",
          date: new Date(),
        },
      ],
    };

    const errorService = {
      report: vi.fn(),
    };

    const wrapper = await shallowMount(EventList, {
      data: () => {
        return {
          service: service,
          errorService: errorService,
        };
      },
      props: {
        events: [
          {
            scope: "section",
            text: "b",
            date: new Date(),
          },
        ],
      },
    } as any);
    await (wrapper.vm as any).loadEventInfo();

    const link = wrapper.find("a.eventinfo");
    expect(link.exists()).toBe(true);
  });

  it("load Error", async () => {
    const service = {
      getEventInfo: () => {
        throw new Error("SomeError");
      },
    };

    const reportFunction = vi.fn();
    const errorService = {
      report: () => reportFunction(),
    };

    await shallowMount(EventList, {
      data: () => {
        return {
          service: service,
          errorService: errorService,
        };
      },
      props: {
        events: [
          {
            scope: "section",
            text: "b",
            date: new Date(),
          },
        ],
      },
    } as any);

    expect(reportFunction.mock.calls.length).toBe(1);
  });

  it("empty eventInfo", async () => {
    const service = {
      getEventInfo: () => {
        return null;
      },
    };

    const errorService = {
      report: vi.fn(),
    };

    const wrapper = await shallowMount(EventList, {
      data: () => {
        return {
          service: service,
          errorService: errorService,
        };
      },
      props: {
        events: [
          {
            scope: "section",
            text: "b",
            date: new Date(),
          },
        ],
      },
    } as any);
    await (wrapper.vm as any).loadEventInfo();

    const link = wrapper.find("a.eventinfo");
    expect(link.exists()).toBe(false);
  });

  it("show event", async () => {
    const eventDetailFunction = vi.fn();
    const eventDetail = {
      /* eslint-disable @typescript-eslint/no-unused-vars */
      open: (info: EventInfo) => eventDetailFunction(),
    };

    const wrapper = await shallowMount(EventList, {});

    // Mock $refs via internal instance
    (wrapper.vm.$ as any).refs = {
      eventDetail: eventDetail,
    };

    (wrapper.vm as any).showEvent({
      scope: "section",
      text: "b",
      date: new Date(),
    });

    expect(eventDetailFunction.mock.calls.length).toBe(1);
  });
});
