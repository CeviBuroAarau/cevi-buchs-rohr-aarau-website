import { isChunkLoadError, reloadForNewDeployment } from "@/router/chunkReload";

describe("chunkReload", () => {
  const assign = vi.fn();

  beforeEach(() => {
    sessionStorage.clear();
    assign.mockReset();
    vi.stubGlobal("location", { ...window.location, assign });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  test("recognizes chunk load errors of the different browsers", () => {
    expect(
      isChunkLoadError(
        new TypeError(
          "Failed to fetch dynamically imported module: https://x/assets/Agenda-abc.js",
        ),
      ),
    ).toBe(true);
    expect(
      isChunkLoadError(
        new TypeError("error loading dynamically imported module"),
      ),
    ).toBe(true);
    expect(
      isChunkLoadError(new TypeError("Importing a module script failed.")),
    ).toBe(true);
    expect(
      isChunkLoadError(new Error("Unable to preload CSS for /assets/a.css")),
    ).toBe(true);
  });

  test("ignores other errors", () => {
    expect(isChunkLoadError(new Error("Network Error"))).toBe(false);
    expect(
      isChunkLoadError("Failed to fetch dynamically imported module"),
    ).toBe(false);
  });

  test("loads the target url", () => {
    expect(reloadForNewDeployment("/cevianer/agenda", 100_000)).toBe(true);
    expect(assign).toHaveBeenCalledWith("/cevianer/agenda");
  });

  test("does not reload again within the guard period", () => {
    reloadForNewDeployment("/cevianer/agenda", 100_000);
    expect(reloadForNewDeployment("/cevianer/agenda", 105_000)).toBe(false);
    expect(reloadForNewDeployment("/cevianer/agenda", 111_000)).toBe(true);
    expect(assign).toHaveBeenCalledTimes(2);
  });
});
