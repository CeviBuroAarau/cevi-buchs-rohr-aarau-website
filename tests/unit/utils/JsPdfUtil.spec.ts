import { JsPdfUtil, ArrayBufferUtil } from "@/utils";
import axios from "axios";

const mockBuffer = ArrayBufferUtil.stringToArrayBuffer8("abc");

jest.mock("axios", () => {
  return {
    create: jest.fn(),
    interceptors: {
      request: { use: jest.fn(), eject: jest.fn() },
      response: { use: jest.fn(), eject: jest.fn() },
    },
    get: () =>
      Promise.resolve({
        data: mockBuffer,
      }),
  };
});

const axiosInstance = axios as jest.Mocked<typeof axios>;

describe("JsPdfUtil", () => {
  test("getPngImageData", async () => {
    expect(await JsPdfUtil.getPngImageData("logo.png", axiosInstance)).toBe(
      "data:image/png;base64,YWJj"
    );
  });
});
