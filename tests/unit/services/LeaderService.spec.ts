import { LeaderService } from "@/services";
import { fakeAxios, upload, FILE_URL } from "./fakeAxios";

const leader = {
  id: 1,
  name: "Leah Dellenbach",
  scoutname: "Luna",
  isActive: true,
  function: ["Abteilungsleiterin"],
  group: { id: 1, name: "Abteilungsleitung" },
  birthyear: "1998",
  place: "Aarau",
  profession: "Studentin",
  recreation: "Lesen",
  inScoutsSince: "2006",
  inScoutsBecause: "es lustig ist",
  bestExperiences: "Pfila 2007",
  image: upload(
    "2017-12-Luna.jpg",
    "2017-12-Luna-400x533.webp",
    "2017-12-Luna-1440x1920.webp",
  ),
};

describe("LeaderService", () => {
  test("getLeaders", async () => {
    const { instance, get } = fakeAxios([leader, { ...leader, group: null }]);

    const leaders = await new LeaderService(instance).getLeaders();

    expect(get).toHaveBeenCalledWith("leaders", {
      params: {
        pagination: false,
        depth: 1,
        where: { isActive: { equals: true } },
      },
    });
    expect(leaders[0]).toEqual({
      name: "Leah Dellenbach",
      scoutname: "Luna",
      isActive: true,
      function: ["Abteilungsleiterin"],
      group: "Abteilungsleitung",
      birthyear: "1998",
      place: "Aarau",
      profession: "Studentin",
      recreation: "Lesen",
      inScoutsSince: "2006",
      inScoutsBecause: "es lustig ist",
      bestExperiences: "Pfila 2007",
      file: FILE_URL + "2017-12-Luna-1440x1920.webp",
      thumb: FILE_URL + "2017-12-Luna-400x533.webp",
    });
    expect(leaders[1].group).toBe("");
  });
});
