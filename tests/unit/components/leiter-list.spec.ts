/* eslint-disable @typescript-eslint/no-explicit-any */
import { mount, shallowMount, Wrapper } from "@vue/test-utils";
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
      process.env.VUE_APP_COCKPIT_FILES +
      "\\/storage\\/uploads\\/2021\\/02\\/01\\/2017-12-Luna.jpg_uid_6018765b6b961.webp",
  };
  const leiter: Leader[] = [luna, luna];

  test("render leiter-list", () => {
    const wrapper = shallowMount(LeiterList, {
      stubs: ["leiter-detail"],
      propsData: {
        leiter: leiter,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  test("showDetail", async () => {
    const wrapper: Wrapper<LeiterList & { [key: string]: any }> = mount(
      LeiterList,
      {
        propsData: {
          leiter: leiter,
        },
      }
    );

    await wrapper.vm.showDetail(luna);

    const container = wrapper.find("div.is-active");
    expect(container.exists()).toBe(true);
  });
});
