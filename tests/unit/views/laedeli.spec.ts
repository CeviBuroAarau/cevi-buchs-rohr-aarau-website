import { shallowMount } from "@vue/test-utils";
import Laedeli from "@/views/Laedeli.vue";

const globalStubs = {
  global: {
    stubs: { FontAwesomeIcon: true },
  },
};

describe("Lädeli Page", () => {
  it("check loading message", () => {
    const wrapper = shallowMount(Laedeli, {
      ...globalStubs,
      data: () => {
        return {
          loading: true,
          error: false,
        };
      },
    } as any);

    const progress = wrapper.find("progress");
    expect(progress.exists()).toBe(true);
    const error = wrapper.find("div.is-danger");
    expect(error.exists()).toBe(false);
    const data = wrapper.find("#articles");
    expect(data.exists()).toBe(false);
  });

  it("load Success", async () => {
    const service = {
      getArticles: () => [],
    };

    const errorService = {
      report: vi.fn(),
    };

    const wrapper = await shallowMount(Laedeli, {
      ...globalStubs,
      data: () => {
        return {
          service: service,
          errorService: errorService,
        };
      },
    } as any);
    await (wrapper.vm as any).loadArticles();

    const progress = wrapper.find("progress");
    expect(progress.exists()).toBe(false);
    const error = wrapper.find("div.is-danger");
    expect(error.exists()).toBe(false);
    const data = wrapper.find("#articles");
    expect(data.exists()).toBe(true);
  });

  it("split articles by category", async () => {
    const article = (name: string, category: string) => ({
      name,
      categories: [category],
      file: "",
      description: "",
      price: "",
    });
    const service = {
      getArticles: () => [
        article("Hemd", "Reguläre Artikel"),
        article("Krawatte", "Reguläre Artikel"),
        article("Pulli", "Restposten"),
      ],
    };

    const wrapper = await shallowMount(Laedeli, {
      ...globalStubs,
      data: () => {
        return {
          service: service,
          errorService: { report: vi.fn() },
        };
      },
    } as any);
    await (wrapper.vm as any).loadArticles();

    const tabs = wrapper.findAll(".tabs li a").map((a) => a.text());
    expect(tabs).toEqual(["Reguläre Artikel (2)", "Restposten (1)"]);
    const names = (wrapper.vm as any).restpostenArticles.map(
      (a: { name: string }) => a.name,
    );
    expect(names).toEqual(["Pulli"]);
  });

  it("load Error", async () => {
    const service = {
      getArticles: () => {
        throw new Error("SomeError");
      },
    };

    const errorService = {
      report: vi.fn(),
    };

    const wrapper = await shallowMount(Laedeli, {
      ...globalStubs,
      data: () => {
        return {
          service: service,
          errorService: errorService,
        };
      },
    } as any);
    await (wrapper.vm as any).loadArticles();

    const progress = wrapper.find("progress");
    expect(progress.exists()).toBe(false);
    const error = wrapper.find("div.is-danger");
    expect(error.exists()).toBe(true);
    const data = wrapper.find("#articles");
    expect(data.exists()).toBe(false);
  });

  it("show form", async () => {
    const laedeliFormFunction = vi.fn();

    const wrapper = await shallowMount(Laedeli, { ...globalStubs });

    (wrapper.vm.$ as any).refs = {
      laedeliForm: { showForm: laedeliFormFunction },
    };

    (wrapper.vm as any).showForm();

    expect(laedeliFormFunction.mock.calls.length).toBe(1);
  });
});
