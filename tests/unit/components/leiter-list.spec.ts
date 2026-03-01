/* eslint-disable @typescript-eslint/no-explicit-any */
import { mount, shallowMount } from "@vue/test-utils";
import LeiterList from "@/components/leiter-list.vue";
import { Leader } from "@/types";

describe("LeiterList Component", () => {
  const luna: Leader = {
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
  const leiter: Leader[] = [luna, luna];

  test("render leiter-list", () => {
    const wrapper = shallowMount(LeiterList, {
      global: {
        stubs: ["leiter-detail"],
      },
      props: {
        leiter: leiter,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  test("showDetail", async () => {
    const wrapper = mount(LeiterList, {
      props: {
        leiter: leiter,
      },
    });

    await (wrapper.vm as any).showDetail(luna);

    const container = wrapper.find("div.is-active");
    expect(container.exists()).toBe(true);
  });
});
