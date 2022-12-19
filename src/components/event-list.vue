<script lang="ts">
import { Component, Emit, Prop, Ref, Vue } from "vue-property-decorator";
import { Agenda, EventInfo } from "@/types";
import EventDetail from "@/components/event-detail.vue";
import { AxiosUtil, DateUtil } from "@/utils";
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
  service: AgendaService = new AgendaService(AxiosUtil.getCockpitInstance());
  errorService: ErrorReportingService = new ErrorReportingService();
  private isEventDisplayed = false;

  async mounted(): Promise<void> {
    await this.loadEventInfo();
  }

  async loadEventInfo(): Promise<void> {
    try {
      this.eventInfos = await this.service.getEventInfo();
    } catch (err) {
      this.errorService.report(err);
    }
  }

  eventsByDate(date: Date): EventInfo[] {
    return this.eventInfos == null
      ? []
      : this.eventInfos.filter((event) => DateUtil.isSameDay(event.date, date));
  }

  showEvent(eventInfo: EventInfo): void {
    this.eventDetail.open(eventInfo);
  }

  @Emit("onEventOpened")
  onEventOpened(): void {
    this.isEventDisplayed = true;
  }

  @Emit("onEventClosed")
  onEventClosed(): void {
    this.isEventDisplayed = false;
  }
}
</script>

<template>
  <div>
    <event-detail
      ref="eventDetail"
      @onEventOpened="onEventOpened()"
      @onEventClosed="onEventClosed()"
    ></event-detail>

    <div
      class="card agenda-item"
      v-bind:class="{ noPrint: isEventDisplayed }"
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
          <p v-html="event.text" class="content"></p>

          <div v-if="eventsByDate(event.date) != null">
            <p
              v-for="(info, itemIndex) in eventsByDate(event.date)"
              :key="itemIndex"
            >
              <a class="eventinfo" @click="showEvent(info)"
                >Informationen für {{ info.scope }}</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.agenda-item {
  margin: 0 0 1em 0;
}
</style>
