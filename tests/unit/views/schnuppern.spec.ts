/* eslint-disable @typescript-eslint/no-explicit-any */
import { shallowMount } from "@vue/test-utils";
import Schnuppern from "@/views/Schnuppern.vue";

describe("Schnuppern Page", () => {
  it("show form", async () => {
    const schnuppernFormFunction = vi.fn();

    const wrapper = await shallowMount(Schnuppern, {
      global: {
        stubs: ["router-link"],
      },
    });

    (wrapper.vm.$ as any).refs = {
      schnuppernForm: { showSubscriptionForm: schnuppernFormFunction },
    };

    (wrapper.vm as any).showSubscriptionForm();

    expect(schnuppernFormFunction.mock.calls.length).toBe(1);
  });
});
