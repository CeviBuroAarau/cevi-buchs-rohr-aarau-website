<script lang="ts">
import { ErrorReportingService, AgendaService } from "@/services";
import { Component, Vue } from "vue-property-decorator";
import { AxiosUtil } from "@/utils";
import { Agenda } from "@/types";
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
  private publicPath = process.env.BASE_URL;

  mounted() {
    this.events = [];
    this.loading = true;
    this.error = false;

    const service: AgendaService = new AgendaService(
      AxiosUtil.getCockpitInstance()
    );
    const errorService: ErrorReportingService = new ErrorReportingService();

    service
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
            <li>
              <a
                :href="`${publicPath}files/jungschidaten/2021-1Jungschardaten.pdf`"
                >Semesterplan (erstes Semester)</a
              >
            </li>
            <li>
              <a
                :href="`${publicPath}files/jungschidaten/2021-2Jungschardaten.pdf`"
                >Semesterplan (zweites Semester)</a
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
