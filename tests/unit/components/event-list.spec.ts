import { shallowMount, Wrapper } from "@vue/test-utils";
import EventList from "@/components/event-list.vue";

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
      report: jest.fn(),
    };

    const wrapper: Wrapper<
      EventList & { [key: string]: any }
    > = await shallowMount(EventList, {
      data: () => {
        return {
          service: service,
          errorService: errorService,
        };
      },
      propsData: {
        events: [
          {
            scope: "section",
            text: "b",
            date: new Date(),
          },
        ],
      },
    });
    await wrapper.vm.loadEventInfo();

    const link = wrapper.find("a.eventinfo");
    expect(link.exists()).toBe(true);
  });

  it("load Error", async () => {
    const service = {
      getEventInfo: () => {
        throw new Error("SomeError");
      },
    };

    const reportFunction = jest.fn();
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
      propsData: {
        events: [
          {
            scope: "section",
            text: "b",
            date: new Date(),
          },
        ],
      },
    });

    expect(reportFunction.mock.calls.length).toBe(1);
  });

  it("empty eventInfo", async () => {
    const service = {
      getEventInfo: () => {
        return null;
      },
    };

    const errorService = {
      report: jest.fn(),
    };

    const wrapper: Wrapper<
      EventList & { [key: string]: any }
    > = await shallowMount(EventList, {
      data: () => {
        return {
          service: service,
          errorService: errorService,
        };
      },
      propsData: {
        events: [
          {
            scope: "section",
            text: "b",
            date: new Date(),
          },
        ],
      },
    });
    await wrapper.vm.loadEventInfo();

    const link = wrapper.find("a.eventinfo");
    expect(link.exists()).toBe(false);
  });

  it("show event", async () => {
    const eventDetailFunction = jest.fn();
    const eventDetail = {
      open: () => eventDetailFunction(),
    };

    const wrapper: Wrapper<
      EventList & { [key: string]: any }
    > = await shallowMount(EventList, {
      computed: {
        eventDetail() {
          return eventDetail;
        },
      },
    });
    wrapper.vm.showEvent({
      scope: "section",
      text: "b",
      date: new Date(),
    });

    expect(eventDetailFunction.mock.calls.length).toBe(1);
  });
});
