import { JsPdfUtil, ArrayBufferUtil } from "@/utils";
import axios from "axios";

const mockBuffer = ArrayBufferUtil.stringToArrayBuffer8("abc");

vi.mock("axios", () => {
  const mock = {
    create: vi.fn(),
    interceptors: {
      request: { use: vi.fn(), eject: vi.fn() },
      response: { use: vi.fn(), eject: vi.fn() },
    },
    get: () =>
      Promise.resolve({
        data: mockBuffer,
      }),
  };
  return { default: mock, ...mock };
});

const axiosInstance = axios as vi.Mocked<typeof axios>;

describe("JsPdfUtil", () => {
  test("getPngImageData", async () => {
    expect(await JsPdfUtil.getPngImageData("logo.png", axiosInstance)).toBe(
      "data:image/png;base64,YWJj",
    );
  });
});
