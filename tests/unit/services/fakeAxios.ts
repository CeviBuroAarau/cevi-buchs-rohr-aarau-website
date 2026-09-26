import { AxiosInstance } from "axios";

// Minimal axios instance that answers every GET with a Payload list response.
export function fakeAxios(docs: unknown[] = []) {
  const get = vi.fn().mockResolvedValue({ data: { docs } });
  const post = vi.fn().mockResolvedValue({ data: {} });
  return { instance: { get, post } as unknown as AxiosInstance, get, post };
}

export const FILE_URL = "https://cms.cevi-buro-aarau.ch/api/media/file/";

export function upload(filename: string, thumbnail: string | null = null) {
  return {
    url: FILE_URL + filename,
    title: null,
    sizes: { thumbnail: { url: thumbnail && FILE_URL + thumbnail } },
  };
}
