import axios from "axios";

export class JsPdfUtil {
  static async getPngImageData(
    assetFileName: string,

    axiosInstance?: any, // eslint-disable-line @typescript-eslint/no-explicit-any
  ): Promise<string> {
    const uri = new URL(`../assets/${assetFileName}`, import.meta.url).href;

    if (axiosInstance == null) {
      axiosInstance = axios.create();
    }
    const response = await axiosInstance.get(uri, {
      responseType: "arraybuffer",
    });

    const imageData =
      "data:image/png;base64," +
      btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          "",
        ),
      );

    return imageData;
  }
}
