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
          Die Leiterliste können monentan nicht abgerufen werden. Bitte
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
                item.function.indexOf('Abteilungsleiterin') > -1
            )
          "
          @onLeiterOpened="onALOpened()"
          @onLeiterClosed="onALClosed()"
          v-bind:class="{ noPrint: !isALDisplayed && this.isAnyDisplayed() }"
        ></leiter-list>

        <h2 class="title is-2">Glühwürmli</h2>
        <leiter-list
          :leiter="
            leiterList.filter((item) => item.group == 'Gruppe Glühwürmli')
          "
          @onLeiterOpened="onGluehwuermliOpened()"
          @onLeiterClosed="onGluehwuermliClosed()"
          v-bind:class="{
            noPrint: !isGluehwuermliDisplayed && this.isAnyDisplayed(),
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
            noPrint: !isSproesslisDisplayed && this.isAnyDisplayed(),
          }"
        ></leiter-list>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { ErrorReportingService, LeaderService } from "@/services";
import { Component, Vue } from "vue-property-decorator";
import { AxiosUtil } from "@/utils";
import { Leader } from "@/types";
import LeiterList from "@/components/leiter-list.vue";

@Component({
  components: {
    LeiterList,
  },
})
export default class Leiterteam extends Vue {
  private leiterList: Leader[] = [];
  private loading = true;
  private error = false;
  service: LeaderService = new LeaderService(AxiosUtil.getCockpitInstance());
  errorService: ErrorReportingService = new ErrorReportingService();
  private isALDisplayed = false;
  private isGluehwuermliDisplayed = false;
  private isSproesslisDisplayed = false;

  async mounted() {
    await this.loadLeaders();
  }

  async loadLeaders() {
    try {
      this.leiterList = await this.service.getLeaders();
      this.error = false;
      this.loading = false;
    } catch (err) {
      this.error = true;
      this.loading = false;
      this.errorService.report(err);
    }
  }

  onALOpened() {
    this.isALDisplayed = true;
  }

  onALClosed() {
    this.isALDisplayed = false;
  }

  onGluehwuermliOpened() {
    this.isGluehwuermliDisplayed = true;
  }

  onGluehwuermliClosed() {
    this.isGluehwuermliDisplayed = false;
  }

  onSproesslisOpened() {
    this.isSproesslisDisplayed = true;
  }

  onSproesslisClosed() {
    this.isSproesslisDisplayed = false;
  }

  isAnyDisplayed() {
    return (
      this.isALDisplayed ||
      this.isGluehwuermliDisplayed ||
      this.isSproesslisDisplayed
    );
  }
}
</script>
