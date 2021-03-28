import { shallowMount, Wrapper } from "@vue/test-utils";
import AgendaView from "@/views/AgendaView.vue";

describe("Agenda Page", () => {
  it("check loading message", () => {
    const wrapper: Wrapper<AgendaView & { [key: string]: any }> = shallowMount(
      AgendaView,
      {
        data: () => {
          return {
            loading: true,
            error: false,
          };
        },
      }
    );

    const progress = wrapper.find("progress");
    expect(progress.exists()).toBe(true);
    const error = wrapper.find("div.is-danger");
    expect(error.exists()).toBe(false);
    const data = wrapper.find("#eventlist");
    expect(data.exists()).toBe(false);
  });

  it("load Success", async () => {
    const agendaService = {
      getAgenda: () => [],
      getEventInfo: () => [],
    };

    const semesterScheduleService = {
      getSchedules: () => [],
    };

    const errorService = {
      report: jest.fn(),
    };

    const wrapper: Wrapper<
      AgendaView & { [key: string]: any }
    > = await shallowMount(AgendaView, {
      data: () => {
        return {
          agendaService: agendaService,
          semesterScheduleService: semesterScheduleService,
          errorService: errorService,
        };
      },
    });
    await wrapper.vm.loadAgenda();
    await wrapper.vm.loadSemesterSchedules();

    const progress = wrapper.find("progress");
    expect(progress.exists()).toBe(false);
    const error = wrapper.find("div.is-danger");
    expect(error.exists()).toBe(false);
    const data = wrapper.find("#eventlist");
    expect(data.exists()).toBe(true);
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

    const semesterScheduleService = {
      getSchedules: () => {
        throw new Error("SomeError");
      },
    };

    const errorService = {
      report: jest.fn(),
    };

    const wrapper: Wrapper<
      AgendaView & { [key: string]: any }
    > = await shallowMount(AgendaView, {
      data: () => {
        return {
          agendaService: agendaService,
          semesterScheduleService: semesterScheduleService,
          errorService: errorService,
        };
      },
    });
    await wrapper.vm.loadAgenda();
    await wrapper.vm.loadSemesterSchedules();

    const progress = wrapper.find("progress");
    expect(progress.exists()).toBe(false);
    const error = wrapper.find("div.is-danger");
    expect(error.exists()).toBe(true);
    const data = wrapper.find("#eventlist");
    expect(data.exists()).toBe(false);
  });
});
