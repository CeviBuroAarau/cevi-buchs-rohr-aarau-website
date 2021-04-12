export class ArrayBufferUtil {
  static stringToArrayBuffer8(str: string): ArrayBuffer {
    const stringLength = str.length;
    const buffer = new ArrayBuffer(stringLength);
    const bufferView = new Uint8Array(buffer);
    for (let i = 0; i < stringLength; i++) {
      bufferView[i] = str.charCodeAt(i);
    }
    return buffer;
  }

  static arrayBuffer8ToString(buffer: ArrayBuffer): string {
    return String.fromCharCode.apply(null, Array.from(new Uint8Array(buffer)));
  }
}
