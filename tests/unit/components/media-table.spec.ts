import { shallowMount } from "@vue/test-utils";
import MediaTable from "@/components/media-table.vue";
import { Media } from "@/types";

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
    props: {
      media: media,
    },
  });

  expect(wrapper.vm).toBeTruthy();
});

test("renders correctly", () => {
  const wrapper = shallowMount(MediaTable, {
    props: {
      media: media,
    },
  });

  expect(wrapper.element).toMatchSnapshot();
});
