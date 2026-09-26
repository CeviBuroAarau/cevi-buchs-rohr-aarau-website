import { KontaktService } from "@/services";
import { fakeAxios } from "./fakeAxios";

describe("KontaktService", () => {
  test("submitForm", async () => {
    const { instance, post } = fakeAxios();
    const message = {
      name: "Muster",
      email: "muster@example.com",
      message: "Hallo",
    };

    await new KontaktService(instance).submitForm(message);

    expect(post).toHaveBeenCalledWith("form-contact", message);
  });
});
