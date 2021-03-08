import { shallowMount } from "@vue/test-utils";
import MediaTable from "@/components/media-table.vue";
import formatDateFilter from "@/filters/DateFilter.ts";
import { Media } from "@/types/Media";

const media: Media[] = [
  {
    type: " news",
    date: new Date(2021, 0, 1),
    description: "Some text",
    file: "Some file",
  },
];

test("can be instantiated", () => {
  const wrapper = shallowMount(MediaTable, {
    stubs: [],
    propsData: {
      media: media,
    },
  });

  expect(wrapper.isVueInstance).toBeTruthy();
});

test("renders correctly", () => {
  const wrapper = shallowMount(MediaTable, {
    stubs: [],
    propsData: {
      media: media,
    },
    filters: {
      formatDateFilter,
    },
  });

  expect(wrapper.element).toMatchSnapshot();
});
