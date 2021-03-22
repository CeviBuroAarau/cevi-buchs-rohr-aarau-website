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

      <div v-if="error">
        <div class="notification is-danger">
          Die Leiterliste können monentan nicht abgerufen werden. Bitte
          versuchen Sie es später noch einmal.
        </div>
      </div>

      <h2 class="title is-2">Abteilungsleitung</h2>
      <leiter-list
        :leiter="
          leiterList.filter(
            (item) =>
              item.function.indexOf('Abteilungsleiter') > -1 ||
              item.function.indexOf('Abteilungsleiterin') > -1
          )
        "
      ></leiter-list>

      <h2 class="title is-2">Spartacus</h2>
      <leiter-list
        :leiter="leiterList.filter((item) => item.group == 'Spartacus')"
      ></leiter-list>

      <h2 class="title is-2">Schleckmäuler</h2>
      <leiter-list
        :leiter="leiterList.filter((item) => item.group == 'Schleckmäuler')"
      ></leiter-list>

      <h2 class="title is-2">Springer</h2>
      <leiter-list
        :leiter="leiterList.filter((item) => item.group == 'Springer')"
      ></leiter-list>
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
  private loading = false;
  private error = false;

  mounted() {
    this.leiterList = [];
    this.loading = true;
    this.error = false;

    const service: LeaderService = new LeaderService(
      AxiosUtil.getCockpitInstance()
    );
    const errorService: ErrorReportingService = new ErrorReportingService();

    service
      .getLeaders()
      .then((leaders: Leader[]) => {
        this.error = false;
        this.loading = false;
        this.leiterList = leaders;
      })
      .catch((err) => {
        this.error = true;
        this.loading = false;
        errorService.report(err);
      });
  }
}
</script>
