<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Leiterteam</h1>
      <p class="content">
        Klicke auf das Bild eines Leiters um einen kurzen Steckbrief anzuzeigen.
      </p>

      <div v-if="loading">
        <p>Daten werden geladen.</p>
        <progress class="progress is-small is-primary" max="100">15%</progress>
      </div>

      <div v-else-if="error">
        <div class="notification is-danger">
          Die Leiterliste können momentan nicht abgerufen werden. Bitte
          versuchen Sie es später noch einmal.
        </div>
      </div>

      <div v-else id="leaders">
        <h2 class="title is-2">Abteilungsleitung</h2>
        <leiter-list
          :leiter="
            leiterList.filter(
              (item) =>
                item.function.indexOf('Abteilungsleiter') > -1 ||
                item.function.indexOf('Abteilungsleiterin') > -1,
            )
          "
          @onLeiterOpened="onALOpened()"
          @onLeiterClosed="onALClosed()"
          v-bind:class="{ noPrint: !isALDisplayed && isAnyDisplayed() }"
        ></leiter-list>

        <h2 class="title is-2">Glühwürmli</h2>
        <leiter-list
          :leiter="
            leiterList.filter((item) => item.group == 'Gruppe Glühwürmli')
          "
          @onLeiterOpened="onGluehwuermliOpened()"
          @onLeiterClosed="onGluehwuermliClosed()"
          v-bind:class="{
            noPrint: !isGluehwuermliDisplayed && isAnyDisplayed(),
          }"
        ></leiter-list>

        <h2 class="title is-2">Sprösslis</h2>
        <leiter-list
          :leiter="
            leiterList.filter((item) => item.group == 'Gruppe Sprösslis')
          "
          @onLeiterOpened="onSproesslisOpened()"
          @onLeiterClosed="onSproesslisClosed()"
          v-bind:class="{
            noPrint: !isSproesslisDisplayed && isAnyDisplayed(),
          }"
        ></leiter-list>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ErrorReportingService, LeaderService } from "@/services";
import { AxiosUtil } from "@/utils";
import { Leader } from "@/types";
import LeiterList from "@/components/leiter-list.vue";

export default defineComponent({
  name: "Leiterteam",
  components: {
    LeiterList,
  },
  data() {
    return {
      leiterList: [] as Leader[],
      loading: true,
      error: false,
      service: new LeaderService(
        AxiosUtil.getCockpitInstance(),
      ) as LeaderService,
      errorService: new ErrorReportingService() as ErrorReportingService,
      isALDisplayed: false,
      isGluehwuermliDisplayed: false,
      isSproesslisDisplayed: false,
    };
  },
  async mounted(): Promise<void> {
    await this.loadLeaders();
  },
  methods: {
    async loadLeaders(): Promise<void> {
      try {
        this.leiterList = await this.service.getLeaders();
        this.error = false;
        this.loading = false;
      } catch (err) {
        this.error = true;
        this.loading = false;
        this.errorService.report(err);
      }
    },
    onALOpened(): void {
      this.isALDisplayed = true;
    },
    onALClosed(): void {
      this.isALDisplayed = false;
    },
    onGluehwuermliOpened(): void {
      this.isGluehwuermliDisplayed = true;
    },
    onGluehwuermliClosed(): void {
      this.isGluehwuermliDisplayed = false;
    },
    onSproesslisOpened(): void {
      this.isSproesslisDisplayed = true;
    },
    onSproesslisClosed(): void {
      this.isSproesslisDisplayed = false;
    },
    isAnyDisplayed(): boolean {
      return (
        this.isALDisplayed ||
        this.isGluehwuermliDisplayed ||
        this.isSproesslisDisplayed
      );
    },
  },
});
</script>
