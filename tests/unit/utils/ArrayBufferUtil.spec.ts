import { ArrayBufferUtil } from "@/utils";

describe("ArrayBufferUtil", () => {
  test("stringToArrayBuffer8 and then arrayBuffer8ToString", () => {
    const buffer = ArrayBufferUtil.stringToArrayBuffer8("abc");
    expect(buffer.byteLength).toBe(3);
    expect(ArrayBufferUtil.arrayBuffer8ToString(buffer)).toEqual("abc");
  });
});
