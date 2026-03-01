<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Agenda, EventInfo } from "@/types";
import EventDetail from "@/components/event-detail.vue";
import { AxiosUtil, DateUtil } from "@/utils";
import { ErrorReportingService, AgendaService } from "@/services";

export default defineComponent({
  name: "EventList",
  components: {
    EventDetail,
  },
  props: {
    events: {
      type: Array as PropType<Agenda[]>,
      required: true,
    },
  },
  emits: ["onEventOpened", "onEventClosed"],
  data() {
    return {
      eventInfos: [] as EventInfo[],
      service: new AgendaService(
        AxiosUtil.getCockpitInstance(),
      ) as AgendaService,
      errorService: new ErrorReportingService() as ErrorReportingService,
      isEventDisplayed: false,
    };
  },
  async mounted(): Promise<void> {
    await this.loadEventInfo();
  },
  methods: {
    async loadEventInfo(): Promise<void> {
      try {
        this.eventInfos = await this.service.getEventInfo();
      } catch (err) {
        this.errorService.report(err);
      }
    },
    eventsByDate(date: Date): EventInfo[] {
      return this.eventInfos == null
        ? []
        : this.eventInfos.filter((event) =>
            DateUtil.isSameDay(event.date, date),
          );
    },
    showEvent(eventInfo: EventInfo): void {
      (this.$refs.eventDetail as InstanceType<typeof EventDetail>).open(
        eventInfo,
      );
    },
    onEventOpened(): void {
      this.isEventDisplayed = true;
      this.$emit("onEventOpened");
    },
    onEventClosed(): void {
      this.isEventDisplayed = false;
      this.$emit("onEventClosed");
    },
  },
});
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
