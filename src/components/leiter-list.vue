<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Leader } from "@/types";
import LeiterDetail from "@/components/leiter-detail.vue";

export default defineComponent({
  name: "LeiterList",
  components: {
    LeiterDetail,
  },
  props: {
    leiter: {
      type: Array as PropType<Leader[]>,
      required: true,
    },
  },
  emits: ["onLeiterOpened", "onLeiterClosed"],
  data() {
    return {
      isEventDisplayed: false,
      activeLeiter: null as Leader | null,
      leiterList: [] as Leader[],
    };
  },
  methods: {
    showDetail(leiter: Leader): void {
      this.activeLeiter = leiter;
      (this.$refs.leiterDetail as InstanceType<typeof LeiterDetail>).open();
    },
    onLeiterOpened(): void {
      this.isEventDisplayed = true;
      this.$emit("onLeiterOpened");
    },
    onLeiterClosed(): void {
      this.isEventDisplayed = false;
      this.$emit("onLeiterClosed");
    },
  },
});
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
      v-if="leiterList != null"
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
