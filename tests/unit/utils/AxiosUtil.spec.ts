import { AxiosUtil } from "@/utils";

describe("AxiosUtil", () => {
  test("getCockpitInstance", () => {
    const axios = AxiosUtil.getCockpitInstance();
    expect(axios).toBeTruthy();
  });

  test("dateConversionInterceptor", () => {
    const res = {
      data: {
        fields: {
          title: {
            name: "title",
            type: "text",
            localize: false,
            options: [],
          },
        },
        entries: [
          {
            title: "15. August 2020 14:00 - 17:00",
            text: "Regulärer Jungschinachmittag.",
            date: "2020-08-15",
            _mby: "5e8c4a1f30656581770002f3",
            _by: "5e8c4a1f30656581770002f3",
            _modified: 1605462138,
            _created: 1605461999,
            _id: "5fb167ef64326267cb000269",
          },
        ],
        total: 1,
      },
      status: 200,
      statusText: "",
      headers: "",
      config: {},
    };
    const processed = AxiosUtil.dateConversionInterceptor(res, "date");
    expect(processed.data.entries[0].date).toEqual(
      new Date(Date.UTC(2020, 7, 15, 0, 0, 0))
    );
  });

  test("dateConversionInterceptor with empty body", () => {
    const res = {
      data: {
        fields: {
          title: {
            name: "title",
            type: "text",
            localize: false,
            options: [],
          },
        },
        entries: [null],
        total: 1,
      },
      status: 200,
      statusText: "",
      headers: "",
      config: {},
    };
    const processed = AxiosUtil.dateConversionInterceptor(res, "date");
    expect(res).toEqual(processed);
  });
});
