/* eslint-disable @typescript-eslint/no-explicit-any */
import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import Home from "@/components/home.vue";

describe("Home Component", () => {
  it("onMobileOpenChanged", async () => {
    const wrapper = await shallowMount(Home, {
      global: {
        stubs: { RouterLink: RouterLinkStub },
      },
    });
    (wrapper.vm as any).onMobileNaviagation();

    const mobileOpenChangedEmitted = wrapper.emitted().mobileOpenChanged;
    if (mobileOpenChangedEmitted === undefined) {
      fail("mobileOpenChangedEmitted mustn't be undefined");
    } else {
      expect(mobileOpenChangedEmitted.length).toBe(1);
      expect(mobileOpenChangedEmitted[0]).toEqual([false]);
    }
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

    const wrapper = await shallowMount(Home, {
      global: {
        stubs: { RouterLink: RouterLinkStub },
      },
      data: () => {
        return {
          service: welcomeService,
          errorService: errorService,
        };
      },
    } as any);
    await (wrapper.vm as any).loadData();

    expect((wrapper.vm as any).activeBackgroundImage).toBe("image.png");
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

    const wrapper = await shallowMount(Home, {
      global: {
        stubs: { RouterLink: RouterLinkStub },
      },
      data: () => {
        return {
          service: welcomeService,
          errorService: errorService,
        };
      },
    } as any);
    await (wrapper.vm as any).loadData();

    expect((wrapper.vm as any).activeBackgroundImage).toBe("");
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

    const wrapper = await shallowMount(Home, {
      global: {
        stubs: { RouterLink: RouterLinkStub },
      },
      data: () => {
        return {
          service: welcomeService,
          errorService: errorService,
        };
      },
    } as any);

    Object.defineProperty(window, "innerWidth", {
      value: 1000,
    });

    await (wrapper.vm as any).onResize();

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

    const wrapper = await shallowMount(Home, {
      global: {
        stubs: { RouterLink: RouterLinkStub },
      },
      data: () => {
        return {
          service: welcomeService,
          errorService: errorService,
        };
      },
    } as any);

    Object.defineProperty(window, "innerWidth", {
      value: 500,
    });

    await (wrapper.vm as any).onResize();

    const cevianerLink = wrapper.find(".cevianer_link");
    expect(cevianerLink.text()).toBe("Mehr Info");
    const interessierteLInk = wrapper.find(".interessierte_link");
    expect(interessierteLInk.text()).toBe("Mehr Info");
  });
});
