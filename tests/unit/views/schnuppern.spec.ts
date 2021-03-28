import { shallowMount, Wrapper } from "@vue/test-utils";
import Schnuppern from "@/views/Schnuppern.vue";

describe("Schnuppern Page", () => {
  it("show form", async () => {
    const schnuppernFormFunction = jest.fn();
    const schnuppernForm = {
      showSubscriptionForm: () => schnuppernFormFunction(),
    };

    const wrapper: Wrapper<
      Schnuppern & { [key: string]: any }
    > = await shallowMount(Schnuppern, {
      stubs: ["router-link"],
      computed: {
        schnuppernForm() {
          return schnuppernForm;
        },
      },
    });
    wrapper.vm.showSubscriptionForm();

    expect(schnuppernFormFunction.mock.calls.length).toBe(1);
  });
});
