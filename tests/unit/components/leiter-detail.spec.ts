/* eslint-disable @typescript-eslint/no-explicit-any */
import { shallowMount } from "@vue/test-utils";
import LeiterDetail from "@/components/leiter-detail.vue";
import { Leader } from "@/types";

describe("LeiterDetail Component", () => {
  const leiter: Leader = {
    name: "Leah Dellenbach",
    isactive: true,
    scoutname: "Luna",
    function: ["Gruppenleiterin", "Abteilungsleiterin"],
    group: "Spartacus",
    birthyear: "1998",
    place: "Aarau",
    profession: "Neue Kantonsschule Aarau",
    recreation: "Lesen, Jungschi, mit Freunden treffen",
    inScoutsSince: "ungef\\u00e4hr 2006",
    inScoutsBecause: "es lustig ist mit Gleichgesinnten etwas zu machen",
    bestExperiences: "Pfila 2007, Leiteranl\\u00e4sse",
    file:
      import.meta.env.VITE_COCKPIT_FILES +
      "\\/storage\\/uploads\\/2021\\/02\\/01\\/2017-12-Luna.jpg_uid_6018765b6b961.webp",
  };

  test("render leiter-detail with leiter", () => {
    const wrapper = shallowMount(LeiterDetail, {
      props: {
        leiter: leiter,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  test("open Form", async () => {
    const wrapper = shallowMount(LeiterDetail, {
      props: {
        leiter: leiter,
      },
    });

    await (wrapper.vm as any).open();

    const container = wrapper.find("div.is-active");
    expect(container.exists()).toBe(true);

    const onLeiterOpenedEmitted = wrapper.emitted().onLeiterOpened;
    if (onLeiterOpenedEmitted === undefined) {
      expect.unreachable("onLeiterOpened mustn't be undefined");
    } else {
      expect(onLeiterOpenedEmitted.length).toBe(1);
    }
  });

  test("close Form", async () => {
    const wrapper = shallowMount(LeiterDetail, {
      props: {
        leiter: leiter,
      },
    });

    await (wrapper.vm as any).close();

    const container = wrapper.find("div.is-active");
    expect(container.exists()).toBe(false);

    const onLeiterClosedEmitted = wrapper.emitted().onLeiterClosed;
    if (onLeiterClosedEmitted === undefined) {
      expect.unreachable("onLeiterClosed mustn't be undefined");
    } else {
      expect(onLeiterClosedEmitted.length).toBe(1);
    }
  });
});
