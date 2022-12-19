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
  private loading = true;
  private error = false;
  private isFull = false;
  private events: Agenda[] = [];
  agendaService: AgendaService = new AgendaService(
    AxiosUtil.getCockpitInstance()
  );
  errorService: ErrorReportingService = new ErrorReportingService();
  private isEventDisplayed = false;

  async mounted(): Promise<void> {
    await this.loadAgenda();
  }

  async loadAgenda(): Promise<void> {
    try {
      this.events = await this.agendaService.getEventsAfterDate(
        new Date(Date.now())
      );
      this.error = false;
      this.loading = false;
    } catch (err) {
      this.error = true;
      this.loading = false;
      this.errorService.report(err);
    }
  }

  getEventsForDisplay(): Agenda[] {
    if (this.isFull) {
      return this.events;
    } else {
      return this.events.slice(0, 3);
    }
  }

  onEventOpened(): void {
    this.isEventDisplayed = true;
  }

  onEventClosed(): void {
    this.isEventDisplayed = false;
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
          Untenstehend sind die nächsten
          {{ this.getEventsForDisplay().length }} Anlässe mit detaillierten
          Informationen aufgeführt.<br />
          <a @click="agendaService.generatePDF(events)"
            >Alle geplante Anlässe als PDF herunterladen</a
          >
        </p>
        <event-list
          id="eventlist"
          :events="this.getEventsForDisplay()"
          @onEventOpened="onEventOpened()"
          @onEventClosed="onEventClosed()"
        ></event-list>
        <p v-if="!isFull">
          <a @click="isFull = true">Mehr Anlässe anzeigen</a>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
