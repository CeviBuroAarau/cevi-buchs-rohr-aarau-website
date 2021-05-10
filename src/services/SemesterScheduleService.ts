import { AxiosInstance, AxiosResponse } from "axios";
import { SemesterSchedule, CockpitSemesterSchedule } from "@/types";

export class SemesterScheduleService {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getSchedules(year: number): Promise<SemesterSchedule[]> {
    const resp: AxiosResponse<CockpitSemesterSchedule> =
      await this.axios.get<CockpitSemesterSchedule>(
        "collections/get/SemesterSchedule"
      );

    const schedule: SemesterSchedule[] = resp.data.entries.map(
      (semesterSchedule) => {
        return {
          year: +semesterSchedule.year,
          semester: +semesterSchedule.semester,
          file: process.env.VUE_APP_COCKPIT_FILES + semesterSchedule.file,
        };
      }
    );

    return schedule
      .filter((schedule) => schedule.year === year)
      .sort((first, second) => {
        if (first.semester > second.semester) {
          return 1;
        } else if (first.semester === second.semester) {
          return 0;
        } else {
          return -1;
        }
      });
  }
}
