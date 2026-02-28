import router from "@/router/index";

describe("Router", () => {
  test("router contains the routes", () => {
    expect(router.getRoutes().length).toBeGreaterThan(0);
  });
});
