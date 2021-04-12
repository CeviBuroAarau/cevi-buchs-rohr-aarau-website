import router from "@/router/index";

describe("Router", () => {
  test("router containes the routes", () => {
    // every route is contained once with and once without / as well as an route for '', * and /*
    expect(router.getRoutes().length).toBe(33);
  });
});
