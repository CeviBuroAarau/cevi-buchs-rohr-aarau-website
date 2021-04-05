import { shallowMount, Wrapper } from "@vue/test-utils";
import Home from "@/components/home.vue";

describe("Home Component", () => {
  it("onMobileOpenChanged", async () => {
    const wrapper: Wrapper<Home & { [key: string]: any }> = await shallowMount(
      Home,
      {
        stubs: ["router-link"],
      }
    );
    wrapper.vm.onMobileNaviagation();

    const mobileOpenChangedEmitted = wrapper.emitted().mobileOpenChanged;
    expect(mobileOpenChangedEmitted![0]).toEqual([false]);
  });

  it("load Success", async () => {
    const welcomeService = {
      getImages: () => [
        {
          url: "image.png",
        },
      ],
    };

    const errorService = {
      report: jest.fn(),
    };

    const wrapper: Wrapper<Home & { [key: string]: any }> = await shallowMount(
      Home,
      {
        stubs: ["router-link"],
        data: () => {
          return {
            service: welcomeService,
            errorService: errorService,
          };
        },
      }
    );
    await wrapper.vm.loadData();

    expect(wrapper.vm.activeBackgroundImage).toBe("image.png");
  });

  it("load Error", async () => {
    const welcomeService = {
      getImages: () => {
        throw new Error("SomeError");
      },
    };

    const errorService = {
      report: jest.fn(),
    };

    const wrapper: Wrapper<Home & { [key: string]: any }> = await shallowMount(
      Home,
      {
        stubs: ["router-link"],
        data: () => {
          return {
            service: welcomeService,
            errorService: errorService,
          };
        },
      }
    );
    await wrapper.vm.loadData();

    expect(wrapper.vm.activeBackgroundImage).toBe("");
  });

  it("resize large", async () => {
    const welcomeService = {
      getImages: () => [
        {
          url: "image.png",
        },
      ],
    };

    const errorService = {
      report: jest.fn(),
    };

    const wrapper: Wrapper<Home & { [key: string]: any }> = await shallowMount(
      Home,
      {
        stubs: ["router-link"],
        data: () => {
          return {
            service: welcomeService,
            errorService: errorService,
          };
        },
      }
    );

    Object.defineProperty(window, "innerWidth", {
      value: 1000,
    });

    await wrapper.vm.onResize();

    const cevianerLink = wrapper.find(".cevianer_link");
    expect(cevianerLink.text()).toBe("Cevianer/In");
    const interessierteLInk = wrapper.find(".interessierte_link");
    expect(interessierteLInk.text()).toBe("Interessierte");
  });

  it("resize small", async () => {
    const welcomeService = {
      getImages: () => [
        {
          url: "image.png",
        },
      ],
    };

    const errorService = {
      report: jest.fn(),
    };

    const wrapper: Wrapper<Home & { [key: string]: any }> = await shallowMount(
      Home,
      {
        stubs: ["router-link"],
        data: () => {
          return {
            service: welcomeService,
            errorService: errorService,
          };
        },
      }
    );

    Object.defineProperty(window, "innerWidth", {
      value: 500,
    });

    await wrapper.vm.onResize();

    const cevianerLink = wrapper.find(".cevianer_link");
    expect(cevianerLink.text()).toBe("Mehr Info");
    const interessierteLInk = wrapper.find(".interessierte_link");
    expect(interessierteLInk.text()).toBe("Mehr Info");
  });
});
