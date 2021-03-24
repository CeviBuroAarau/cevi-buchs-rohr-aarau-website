export interface SemesterSchedule {
  year: number;
  semester: number;
  file: string;
}

export interface CockpitSemesterSchedule {
  entries: SemesterScheduleRaw[];
}

export interface SemesterScheduleRaw {
  year: number;
  semester: number;
  file: string;
}
