import { shallowMount } from "@vue/test-utils";
import LeiterDetail from "@/components/leiter-detail.vue";
import { Leader } from "@/types";

test("render leiter-detail with leiter", () => {
  const leiter: Leader = {
    name: "Leah Dellenbach",
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
      process.env.VUE_APP_COCKPIT_FILES +
      "\\/storage\\/uploads\\/2021\\/02\\/01\\/2017-12-Luna.jpg_uid_6018765b6b961.webp",
  };

  const wrapper = shallowMount(LeiterDetail, {
    stubs: [],
    propsData: {
      leiter: leiter,
    },
  });

  expect(wrapper.element).toMatchSnapshot();
});
