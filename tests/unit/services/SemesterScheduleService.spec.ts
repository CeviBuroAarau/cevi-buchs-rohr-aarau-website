import { SemesterScheduleService } from "@/services";
import { SemesterSchedule } from "@/types";
import axios from "axios";

jest.mock("axios", () => {
  return {
    create: jest.fn(),
    interceptors: {
      request: { use: jest.fn(), eject: jest.fn() },
      response: { use: jest.fn(), eject: jest.fn() },
    },
    get: () =>
      Promise.resolve({
        data: {
          fields: {
            year: {
              name: "year",
              type: "select",
              localize: false,
              options: {
                options: [
                  {
                    value: "2020",
                    label: "2020",
                  },
                ],
              },
            },
            semester: {
              name: "semester",
              type: "select",
              localize: false,
              options: {
                options: [
                  {
                    value: "1",
                    label: "1",
                  },
                  {
                    value: "2",
                    label: "2",
                  },
                ],
              },
            },
            file: {
              name: "file",
              type: "file",
              localize: false,
              options: [],
            },
          },
          entries: [
            {
              year: "2021",
              semester: "2",
              file: "storage\\/uploads\\/2021\\/03\\/24\\/2021-2Jungschardaten_uid_605b8bcca78c2.pdf",
              _mby: "5e8c4a1f30656581770002f3",
              _by: "5e8c4a1f30656581770002f3",
              _modified: 1616612305,
              _created: 1616612305,
              _id: "605b8bd16638394f200003dc",
            },
            {
              year: "2021",
              semester: "1",
              file: "storage\\/uploads\\/2021\\/03\\/24\\/2021-1Jungschardaten_uid_605b8bb18006d.pdf",
              _mby: "5e8c4a1f30656581770002f3",
              _by: "5e8c4a1f30656581770002f3",
              _modified: 1616612277,
              _created: 1616612277,
              _id: "605b8bb5646633265a00005a",
            },
            {
              year: "2020",
              semester: "2",
              file: "storage\\/uploads\\/2021\\/03\\/24\\/2020-2Jungschardaten_uid_605b8bc5d5cd3.pdf",
              _mby: "5e8c4a1f30656581770002f3",
              _by: "5e8c4a1f30656581770002f3",
              _modified: 1616612347,
              _created: 1616612347,
              _id: "605b8bfb303630e05d0001a9",
            },
          ],
          total: 3,
        },
      }),
  };
});

const axiosInstance = axios as jest.Mocked<typeof axios>;

describe("SemesterScheduleService", () => {
  test("get semesterSchedules", async () => {
    const service: SemesterScheduleService = new SemesterScheduleService(
      axiosInstance
    );
    const schedules: SemesterSchedule[] = await service.getSchedules(2021);
    expect(schedules.length).toBe(2);
    expect(schedules[0].year).toBe(2021);
    expect(schedules[0].semester).toBe(1);
    expect(schedules[1].year).toBe(2021);
    expect(schedules[1].semester).toBe(2);
  });
});

describe("SemesterScheduleService", () => {
  test("get semesterSchedules - not available", async () => {
    const service: SemesterScheduleService = new SemesterScheduleService(
      axiosInstance
    );
    const schedules: SemesterSchedule[] = await service.getSchedules(2022);
    expect(schedules.length).toBe(0);
  });
});
