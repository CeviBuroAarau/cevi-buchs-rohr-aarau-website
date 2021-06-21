<script lang="ts">
import { Component, Emit, Prop, Ref, Vue } from "vue-property-decorator";
import { Leader } from "@/types";
import LeiterDetail from "@/components/leiter-detail.vue";

@Component({
  components: {
    LeiterDetail,
  },
})
export default class LeiterList extends Vue {
  @Prop({}) readonly leiter!: Leader[];
  @Ref("leiterDetail") readonly leiterDetail!: LeiterDetail;
  private isEventDisplayed = false;

  private activeLeiter: Leader | null = null;
  private leiterList: Leader[] = [];

  showDetail(leiter: Leader) {
    this.activeLeiter = leiter;
    this.leiterDetail.open();
  }

  @Emit("onLeiterOpened")
  onLeiterOpened() {
    this.isEventDisplayed = true;
  }

  @Emit("onLeiterClosed")
  onLeiterClosed() {
    this.isEventDisplayed = false;
  }
}
</script>

<template>
  <div>
    <leiter-detail
      ref="leiterDetail"
      @onLeiterOpened="onLeiterOpened()"
      @onLeiterClosed="onLeiterClosed()"
      :leiter="activeLeiter"
    ></leiter-detail>

    <ul
      style="display: flex; flex-wrap: wrap"
      v-if="this.leiterList != null"
      v-bind:class="{
        noPrint: isEventDisplayed,
      }"
    >
      <li
        class="leiterlist"
        v-for="(item, itemIndex) in leiter"
        :key="itemIndex"
        @click="showDetail(item)"
      >
        <div class="card" style="width: 180px">
          <div class="card-image is-centered">
            <img width="170" :src="item.file" :alt="item.scoutname" />
          </div>
          <div class="card-content is-centered">
            <strong
              >{{ item.name }}<br />
              v/o {{ item.scoutname }}</strong
            >
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.leiterlist {
  list-style-type: none;
  margin-right: 1em;
}
</style>
