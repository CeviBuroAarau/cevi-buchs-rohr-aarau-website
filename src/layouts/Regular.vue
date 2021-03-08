<template>
  <div class="flex-column-wrapper">
    <HeaderBar
      @mobileOpenChanged="onMobileOpenChanged"
      :isMobileMenuOpen="mobileOpen"
    />
    <div class="flex-row-wrapper">
      <Navigation
        @mobileOpenChanged="onMobileOpenChanged"
        :isMobileMenuOpen="mobileOpen"
      />
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaderBar from "@/components/header-bar.vue";
import Navigation from "@/components/navigation.vue";

@Component({
  components: {
    HeaderBar,
    Navigation,
  },
})
export default class RegularLayout extends Vue {
  private mobileOpen = false;

  onMobileOpenChanged(value: boolean) {
    this.mobileOpen = value;
  }
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all.sass";
@import "~bulma/sass/helpers/_all.sass";
@import "~bulma/sass/base/_all.sass";

@import "~bulma/sass/components/card.sass";
@import "~bulma/sass/components/modal.sass";

@import "~bulma/sass/elements/button.sass";
@import "~bulma/sass/elements/container.sass";
@import "~bulma/sass/elements/content.sass";
@import "~bulma/sass/elements/icon.sass";
@import "~bulma/sass/elements/notification.sass";
@import "~bulma/sass/elements/other.sass"; // close cross of the modal
@import "~bulma/sass/elements/table.sass";
@import "~bulma/sass/elements/title.sass";

@import "~bulma/sass/form/shared.sass";
@import "~bulma/sass/form/checkbox-radio.sass";
@import "~bulma/sass/form/input-textarea.sass";
@import "~bulma/sass/form/tools.sass";

@import "~bulma/sass/layout/section.sass";
</style>

<style scoped lang="scss">
.flex-column-wrapper {
  display: flex;
  flex-flow: column;
  min-height: 100%;
}

.flex-row-wrapper {
  display: flex;
  flex-flow: row;
  flex-grow: 1;
  flex-shrink: 0;
}
</style>
