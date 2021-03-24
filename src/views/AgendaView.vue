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
  private loading = false;
  private error = false;
  private events: Agenda[] = [];
  private schedules: SemesterSchedule[] = [];

  mounted() {
    this.events = [];
    this.loading = true;
    this.error = false;

    const agendaService: AgendaService = new AgendaService(
      AxiosUtil.getCockpitInstance()
    );
    const semesterScheduleService: SemesterScheduleService = new SemesterScheduleService(
      AxiosUtil.getCockpitInstance()
    );
    const errorService: ErrorReportingService = new ErrorReportingService();

    agendaService
      .getAgenda()
      .then((agenda) => {
        this.error = false;
        this.loading = false;
        this.events = agenda;
      })
      .catch((err) => {
        this.error = true;
        this.loading = false;
        errorService.report(err);
      });

    const currentDate: Date = new Date();
    semesterScheduleService
      .getSchedules(currentDate.getFullYear())
      .then((schedules) => {
        this.error = false;
        this.loading = false;
        this.schedules = schedules;
      })
      .catch((err) => {
        this.error = true;
        this.loading = false;
        errorService.report(err);
      });
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

      <div v-if="error">
        <div class="notification is-danger">
          Die Agendadaten können monentan nicht abgerufen werden. Bitte
          versuchen Sie es später noch einmal.
        </div>
      </div>

      <div v-if="events">
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
        <event-list :events="this.events"></event-list>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
