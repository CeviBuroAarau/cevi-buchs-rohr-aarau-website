<script lang="ts">
import {
  ErrorReportingService,
  AgendaService,
  SemesterScheduleService,
} from "@/services";
import { Component, Vue } from "vue-property-decorator";
import { AxiosUtil } from "@/utils";
import { Agenda, SemesterSchedule } from "@/types";
import EventList from "@/components/event-list.vue";

@Component({
  components: {
    EventList,
  },
})
export default class AgendaView extends Vue {
  private loading = true;
  private error = false;
  private events: Agenda[] = [];
  private schedules: SemesterSchedule[] = [];
  agendaService: AgendaService = new AgendaService(
    AxiosUtil.getCockpitInstance()
  );
  semesterScheduleService: SemesterScheduleService = new SemesterScheduleService(
    AxiosUtil.getCockpitInstance()
  );
  errorService: ErrorReportingService = new ErrorReportingService();

  async mounted() {
    await this.loadAgenda();
    await this.loadSemesterSchedules();
  }

  async loadAgenda() {
    try {
      this.events = await this.agendaService.getAgenda();
      this.error = false;
      this.loading = false;
    } catch (err) {
      this.error = true;
      this.loading = false;
      this.errorService.report(err);
    }
  }

  async loadSemesterSchedules() {
    const currentDate: Date = new Date();
    try {
      this.schedules = await this.semesterScheduleService.getSchedules(
        currentDate.getFullYear()
      );
      this.loading = false;
      this.error = false;
    } catch (err) {
      this.error = true;
      this.loading = false;
      this.errorService.report(err);
    }
  }
}
</script>
<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Agenda</h1>

      <div v-if="loading">
        <p>Daten werden geladen.</p>
        <progress class="progress is-small is-primary" max="100">15%</progress>
      </div>

      <div v-else-if="error">
        <div class="notification is-danger">
          Die Agendadaten können monentan nicht abgerufen werden. Bitte
          versuchen Sie es später noch einmal.
        </div>
      </div>

      <div v-else>
        <p class="content">
          Die Semsterpläne werden jeweils zu Beginn des Jahres veröffentlicht
          und enthalten wenig detaillierte Informationen:
        </p>
        <div class="content">
          <ul>
            <li
              v-for="(schedule, scheduleIndex) in this.schedules"
              :key="scheduleIndex"
            >
              <a :href="schedule.file"
                >Semesterplan
                {{
                  schedule.semester == "1"
                    ? "erstes Semester"
                    : "zweites Semester"
                }}</a
              >
            </li>
          </ul>
        </div>
        <p class="content">
          Untenstehend sind die nächsten 3 Anlässe mit detaillierten
          Informationen aufgeführt.
        </p>
        <event-list id="eventlist" :events="this.events"></event-list>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
