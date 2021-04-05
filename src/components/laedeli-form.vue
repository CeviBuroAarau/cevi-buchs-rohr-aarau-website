<script lang="ts">
import { ErrorReportingService, ShopService } from "@/services";
import { Component, Ref, Vue } from "vue-property-decorator";
import { AxiosUtil } from "@/utils";
import { LaedeliFormState } from "@/types";
import Modal from "@/components/modal.vue";

@Component({
  components: {
    Modal,
  },
})
export default class LaedeliForm extends Vue {
  @Ref("successModal") readonly successModal!: Modal;
  @Ref("errorModal") readonly errorModal!: Modal;

  private state: LaedeliFormState = LaedeliFormState.NotDisplayed;
  private name = "";
  private email = "";
  private articles = "";
  private adress = "";
  private deliveryMethod = "";
  public LaedeliFormState = LaedeliFormState;
  private service: ShopService = new ShopService(
    AxiosUtil.getCockpitInstance()
  );
  private errorService: ErrorReportingService = new ErrorReportingService();

  async order() {
    try {
      await this.service.submitForm({
        form: {
          name: this.name,
          email: this.email,
          articles: this.articles,
          deliveryMethod: this.deliveryMethod,
          adress: this.adress,
        },
      });
      this.state = LaedeliFormState.NotDisplayed;
      this.successModal.open();
      this.name = "";
      this.email = "";
      this.articles = "";
      this.deliveryMethod = "";
      this.adress = "";
    } catch (err) {
      this.state = LaedeliFormState.NotDisplayed;
      this.errorModal.open();
      this.errorService.report(err);
    }
  }

  public showForm() {
    this.state = LaedeliFormState.Displayed;
  }

  close() {
    this.state = LaedeliFormState.NotDisplayed;
  }
}
</script>

<style scoped lang="scss">
.modal {
  z-index: 1050; /* headerbar has a z-index of 1001 */
}
</style>

<template>
  <div>
    <div
      class="modal"
      :class="{
        'is-active': state == LaedeliFormState.Displayed,
      }"
    >
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Bestellformular</p>
          <button
            class="delete"
            aria-label="close"
            v-on:click="close()"
          ></button>
        </header>
        <section class="modal-card-body">
          <div class="notification is-info">
            Bitte füllen Sie alle Felder des Formulars aus.
          </div>

          <div class="field">
            <label for="name" class="label">Name</label>
            <div class="control has-icons-left">
              <input
                class="input"
                id="name"
                type="text"
                v-model="name"
                placeholder=""
              />
              <span class="icon is-small is-left">
                <span class="fas fa-user"></span>
              </span>
            </div>
          </div>

          <div class="field">
            <label for="articles" class="label"
              >Welche Artikel möchten Sie bestellen?</label
            >
            <div class="control">
              <textarea
                id="articles"
                class="textarea"
                v-model="articles"
                placeholder=""
              ></textarea>
            </div>
          </div>

          <div class="field">
            <label class="label"
              >Wünschen Sie eine Lieferung oder Abholung?</label
            >

            <div class="control">
              <label for="delivery" class="radio">
                <input
                  type="radio"
                  id="delivery"
                  name="deliveryMethod"
                  value="Lieferung"
                  v-model="deliveryMethod"
                />
                Lieferung
              </label>
              <br />
              <label for="abholung" class="radio">
                <input
                  type="radio"
                  id="abholung"
                  name="deliveryMethod"
                  value="Abholung"
                  v-model="deliveryMethod"
                />
                Abholung
              </label>
            </div>
          </div>

          <div class="field">
            <label for="email" class="label">Email</label>
            <div class="control has-icons-left">
              <input
                class="input"
                id="email"
                type="email"
                v-model="email"
                placeholder=""
                value=""
              />
              <span class="icon is-small is-left">
                <span class="fas fa-envelope"></span>
              </span>
            </div>
          </div>

          <div class="field">
            <label for="adress" class="label"
              >Wie lautet Ihre Adresse (notwendig bei Lieferung)?</label
            >
            <div class="control">
              <textarea
                id="adress"
                class="textarea"
                v-model="adress"
                placeholder=""
              ></textarea>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button
            class="button is-success"
            :disabled="
              !name ||
              !email ||
              !articles ||
              !deliveryMethod ||
              (deliveryMethod == 'Lieferung' && !adress)
            "
            v-on:click="order()"
          >
            Bestellung senden
          </button>
          <button class="button" v-on:click="close()">Abbrechen</button>
        </footer>
      </div>
    </div>

    <modal
      title="Danke für die Bestellung"
      message="Wir behandeln Ihre Bestellung in der Regel innert 5 Arbeitstagen."
      ref="successModal"
    ></modal>

    <modal
      title="Bestellung fehlgeschlagen"
      message="Senden des Formulars fehlgeschlagen. Bitte versuchen Sie es später
            nocheinmal."
      type="error"
      ref="errorModal"
    ></modal>
  </div>
</template>
