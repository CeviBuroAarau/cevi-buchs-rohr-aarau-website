import axios from "axios";

export class JsPdfUtil {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  static async getPngImageData(
    assetFileName: string,
    /* eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types */
    axiosInstance?: any // eslint-disable-line @typescript-eslint/no-explicit-any
  ): Promise<string> {
    /* eslint-disable-next-line @typescript-eslint/no-var-requires */
    const uri = require("@/assets/" + assetFileName);

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
          ""
        )
      );

    return imageData;
  }
}
