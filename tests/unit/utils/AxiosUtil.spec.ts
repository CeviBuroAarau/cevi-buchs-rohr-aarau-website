import { AxiosUtil } from "@/utils";

describe("AxiosUtil", () => {
  test("getBackendInstance", () => {
    const axios = AxiosUtil.getBackendInstance();
    expect(axios.defaults.baseURL).toBe(
      import.meta.env.VITE_BACKEND_URL + "/api/",
    );
    expect(axios.defaults.headers.Authorization).toBeUndefined();
  });
});
