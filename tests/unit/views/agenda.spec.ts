/* eslint-disable @typescript-eslint/no-explicit-any */
import { mount, shallowMount } from "@vue/test-utils";
import AgendaView from "@/views/Agenda.vue";

describe("Agenda Page", () => {
  it("check loading message", () => {
    const wrapper = shallowMount(AgendaView, {
      data: () => {
        return {
          loading: true,
          error: false,
        };
      },
    } as any);

    const progress = wrapper.find("progress");
    expect(progress.exists()).toBe(true);
    const error = wrapper.find("div.is-danger");
    expect(error.exists()).toBe(false);
    const data = wrapper.find("#eventlist");
    expect(data.exists()).toBe(false);
  });

  it("load Short Agenda Success", async () => {
    const agendaService = {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      getEventsAfterDate: (currentDate: Date) => [
        {
          title: "123",
          text: "123",
          date: new Date(Date.UTC(2020, 6, 1)),
        },
        {
          title: "123",
          text: "123",
          date: new Date(Date.UTC(2020, 6, 10)),
        },
        {
          title: "123",
          text: "123",
          date: new Date(Date.UTC(2020, 6, 15)),
        },
        {
          title: "123",
          text: "123",
          date: new Date(Date.UTC(2020, 6, 20)),
        },
      ],
      getEventInfo: () => [],
    };

    const errorService = {
      report: vi.fn(),
    };

    const realDateNow = Date.now.bind(global.Date);
    const dateNowStub = vi.fn(() => 1593900000000); // 2020-07-05 00:00:00
    global.Date.now = dateNowStub;

    const wrapper = await mount(AgendaView, {
      data: () => {
        return {
          agendaService: agendaService,
          errorService: errorService,
        };
      },
    } as any);
    await (wrapper.vm as any).loadAgenda();

    const progress = wrapper.find("progress");
    expect(progress.exists()).toBe(false);
    const error = wrapper.find("div.is-danger");
    expect(error.exists()).toBe(false);
    const data = wrapper.find("#eventlist");
    expect(data.exists()).toBe(true);
    const agendaItems = wrapper.findAll(".agenda-item");
    expect(agendaItems.length).toBe(3);

    expect(dateNowStub).toHaveBeenCalled();
    global.Date.now = realDateNow;
  });

  it("load Full Agenda Success", async () => {
    const agendaService = {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      getEventsAfterDate: (currentDate: Date) => [
        {
          title: "123",
          text: "123",
          date: new Date(Date.UTC(2020, 6, 1)),
        },
        {
          title: "123",
          text: "123",
          date: new Date(Date.UTC(2020, 6, 10)),
        },
        {
          title: "123",
          text: "123",
          date: new Date(Date.UTC(2020, 6, 15)),
        },
        {
          title: "123",
          text: "123",
          date: new Date(Date.UTC(2020, 6, 20)),
        },
      ],
      getEventInfo: () => [],
    };

    const errorService = {
      report: vi.fn(),
    };

    const realDateNow = Date.now.bind(global.Date);
    const dateNowStub = vi.fn(() => 1593900000000); // 2020-07-05 00:00:00
    global.Date.now = dateNowStub;

    const wrapper = await mount(AgendaView, {
      data: () => {
        return {
          agendaService: agendaService,
          errorService: errorService,
          isFull: true,
        };
      },
    } as any);
    await (wrapper.vm as any).loadAgenda();

    const progress = wrapper.find("progress");
    expect(progress.exists()).toBe(false);
    const error = wrapper.find("div.is-danger");
    expect(error.exists()).toBe(false);
    const data = wrapper.find("#eventlist");
    expect(data.exists()).toBe(true);
    const agendaItems = wrapper.findAll(".agenda-item");
    expect(agendaItems.length).toBe(4);

    expect(dateNowStub).toHaveBeenCalled();
    global.Date.now = realDateNow;
  });

  it("load Error", async () => {
    const agendaService = {
      getAgenda: () => {
        throw new Error("SomeError");
      },
      getEventInfo: () => {
        throw new Error("SomeError");
      },
    };

    const errorService = {
      report: vi.fn(),
    };

    const wrapper = await shallowMount(AgendaView, {
      data: () => {
        return {
          agendaService: agendaService,
          errorService: errorService,
        };
      },
    } as any);
    await (wrapper.vm as any).loadAgenda();

    const progress = wrapper.find("progress");
    expect(progress.exists()).toBe(false);
    const error = wrapper.find("div.is-danger");
    expect(error.exists()).toBe(true);
    const data = wrapper.find("#eventlist");
    expect(data.exists()).toBe(false);
  });
});
