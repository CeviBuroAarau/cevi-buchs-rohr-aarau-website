import { shallowMount } from "@vue/test-utils";
import ArticleList from "@/components/article-list.vue";
import { Article } from "@/types";

describe("ArticleList Component", () => {
  const articles: Article[] = [
    {
      name: "Jungscharhemd Kinder",
      file:
        process.env.VUE_APP_COCKPIT_FILES +
        "\\/storage\\/uploads\\/2021\\/01\\/28\\/haupt_01_cevi_hemd.jpg_uid_6013250287435.webp",
      price: "54.9",
      categories: ["Regul\\u00e4re Artikel"],
      description: "Verf\\u00fcgbare Gr\\u00f6ssen 140, 152, 164",
    },
    {
      name: "Jungscharhemd Erwachsene",
      file:
        process.env.VUE_APP_COCKPIT_FILES +
        "\\/storage\\/uploads\\/2021\\/01\\/28\\/haupt_02_cevi_hemd_erwachsene.jpg_uid_60132502b1bcf.webp",
      price: "62.9",
      categories: ["Regul\\u00e4re Artikel"],
      description: "Verf\\u00fcgbare Gr\\u00f6ssen S, M, L, XL, 2XL",
    },
  ];

  test("render article-list", () => {
    const wrapper = shallowMount(ArticleList, {
      stubs: [],
      propsData: {
        articles: articles,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
