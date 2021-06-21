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

        <h2 class="title is-2">Spartacus</h2>
        <leiter-list
          :leiter="leiterList.filter((item) => item.group == 'Spartacus')"
          @onLeiterOpened="onSpartacusOpened()"
          @onLeiterClosed="onSpartacusClosed()"
          v-bind:class="{
            noPrint: !isSpartacusDisplayed && this.isAnyDisplayed(),
          }"
        ></leiter-list>

        <h2 class="title is-2">Schleckmäuler</h2>
        <leiter-list
          :leiter="leiterList.filter((item) => item.group == 'Schleckmäuler')"
          @onLeiterOpened="onSchleckmaeulerOpened()"
          @onLeiterClosed="onSchleckmaeulerClosed()"
          v-bind:class="{
            noPrint: !isSchleckmaeulerDisplayed && this.isAnyDisplayed(),
          }"
        ></leiter-list>

        <h2 class="title is-2">Springer</h2>
        <leiter-list
          :leiter="leiterList.filter((item) => item.group == 'Springer')"
          @onLeiterOpened="onSpringerOpened()"
          @onLeiterClosed="onSpringerClosed()"
          v-bind:class="{
            noPrint: !isSpringerDisplayed && this.isAnyDisplayed(),
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
  private isSpartacusDisplayed = false;
  private isSchleckmaeulerDisplayed = false;
  private isSpringerDisplayed = false;

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

  onSpartacusOpened() {
    this.isSpartacusDisplayed = true;
  }

  onSpartacusClosed() {
    this.isSpartacusDisplayed = false;
  }

  onSchleckmaeulerOpened() {
    this.isSchleckmaeulerDisplayed = true;
  }

  onSchleckmaeulerClosed() {
    this.isSchleckmaeulerDisplayed = false;
  }

  onSpringerOpened() {
    this.isSpringerDisplayed = true;
  }

  onSpringerClosed() {
    this.isSpringerDisplayed = false;
  }

  isAnyDisplayed() {
    return (
      this.isALDisplayed ||
      this.isSpartacusDisplayed ||
      this.isSchleckmaeulerDisplayed ||
      this.isSpringerDisplayed
    );
  }
}
</script>
