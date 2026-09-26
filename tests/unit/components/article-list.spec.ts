import { shallowMount } from "@vue/test-utils";
import ArticleList from "@/components/article-list.vue";
import { Article } from "@/types";

describe("ArticleList Component", () => {
  const articles: Article[] = [
    {
      name: "Jungscharhemd Kinder",
      file: "https://cms.cevi-buro-aarau.ch/api/media/file/haupt_01_cevi_hemd.webp",
      price: "54.9",
      categories: ["Regul\\u00e4re Artikel"],
      description: "Verf\\u00fcgbare Gr\\u00f6ssen 140, 152, 164",
    },
    {
      name: "Jungscharhemd Erwachsene",
      file: "https://cms.cevi-buro-aarau.ch/api/media/file/haupt_02_cevi_hemd_erwachsene.webp",
      price: "62.9",
      categories: ["Regul\\u00e4re Artikel"],
      description: "Verf\\u00fcgbare Gr\\u00f6ssen S, M, L, XL, 2XL",
    },
  ];

  test("render article-list", () => {
    const wrapper = shallowMount(ArticleList, {
      props: {
        articles: articles,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
