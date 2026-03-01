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
import { defineComponent } from "vue";
import HeaderBar from "@/components/header-bar.vue";
import Navigation from "@/components/navigation.vue";

export default defineComponent({
  name: "RegularLayout",
  components: {
    HeaderBar,
    Navigation,
  },
  data() {
    return {
      mobileOpen: false,
    };
  },
  methods: {
    onMobileOpenChanged(value: boolean): void {
      this.mobileOpen = value;
    },
  },
});
</script>

<style lang="scss">
@import "bulma/sass/themes/_index.scss";
@import "bulma/sass/utilities/_index.scss";
@import "bulma/sass/helpers/_index.scss";
@import "bulma/sass/base/_index.scss";

@import "bulma/sass/components/card.scss";
@import "bulma/sass/components/modal.scss";

@import "bulma/sass/elements/button.scss";
@import "bulma/sass/layout/container.scss";
@import "bulma/sass/elements/content.scss";
@import "bulma/sass/elements/icon.scss";
@import "bulma/sass/elements/notification.scss";
@import "bulma/sass/elements/delete.scss"; // close cross of the modal
@import "bulma/sass/elements/table.scss";
@import "bulma/sass/elements/title.scss";

@import "bulma/sass/form/shared.scss";
@import "bulma/sass/form/checkbox-radio.scss";
@import "bulma/sass/form/input-textarea.scss";
@import "bulma/sass/form/tools.scss";

@import "bulma/sass/layout/section.scss";

// Bulma 1.0 changed .modal-background from position:fixed to position:absolute.
// Additionally, the %overlay placeholder is emitted twice during webpack compilation,
// so the second position:absolute occurrence overrides Bulma's own position:fixed on
// .modal. Override both here to ensure the modal always covers the full viewport.
.modal,
.modal-background {
  position: fixed;
}

// Bulma 1.0 removed the gap between buttons in .modal-card-foot.
.modal-card-foot {
  gap: 0.5em;
}
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
