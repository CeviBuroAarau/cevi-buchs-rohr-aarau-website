<script lang="ts">
import { Component, Prop, Ref, Vue } from "vue-property-decorator";
import { Agenda, EventInfo } from "@/types";
import EventDetail from "@/components/event-detail.vue";
import { AxiosUtil, DateUtils } from "@/utils";
import { ErrorReportingService, AgendaService } from "@/services";

@Component({
  components: {
    EventDetail,
  },
})
export default class EventList extends Vue {
  @Prop({}) readonly events!: Agenda[];
  @Ref("eventDetail") readonly eventDetail!: EventDetail;
  private eventInfos: EventInfo[] = [];

  mounted() {
    this.eventInfos = [];

    const service: AgendaService = new AgendaService(
      AxiosUtil.getCockpitInstance()
    );
    const errorService: ErrorReportingService = new ErrorReportingService();

    service
      .getEventInfo()
      .then((eventInfo) => {
        this.eventInfos = eventInfo;
      })
      .catch((err) => {
        errorService.report(err);
      });
  }

  eventsByDate(date: Date) {
    return this.eventInfos == null
      ? []
      : this.eventInfos.filter((event) =>
          DateUtils.isSameDay(event.date, date)
        );
  }

  showEvent(eventInfo: EventInfo) {
    this.eventDetail.open(eventInfo);
  }
}
</script>

<template>
  <div>
    <div
      class="card agenda-item"
      v-for="(event, eventIndex) in events"
      :key="eventIndex"
    >
      <header class="card-header">
        <p class="card-header-title">
          {{ event.title }}
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          <p class="content">
            {{ event.text }}
          </p>

          <div v-if="eventsByDate(event.date) != null">
            <p
              v-for="(info, itemIndex) in eventsByDate(event.date)"
              :key="itemIndex"
            >
              <a v-if="info.scope == 'section'" @click="showEvent(info)"
                >Informationen für alle</a
              >
              <a v-if="info.scope == 'group_spartacus'" @click="showEvent(info)"
                >Informationen für Spartacus</a
              >
              <a
                v-if="info.scope == 'group_schleckmaeuler'"
                @click="showEvent(info)"
                >Informationen für Schleckmäuler</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <event-detail ref="eventDetail"></event-detail>
  </div>
</template>

<style scoped lang="scss">
.agenda-item {
  margin: 0 0 1em 0;
}
</style>
