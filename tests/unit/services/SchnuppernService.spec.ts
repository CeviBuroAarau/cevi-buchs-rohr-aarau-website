import { SchnuppernService } from "@/services";
import { fakeAxios } from "./fakeAxios";

describe("SchnuppernService", () => {
  test("submitForm", async () => {
    const { instance, post } = fakeAxios();
    const registration = {
      name: "Muster",
      email: "muster@example.com",
      phonenumber: "079 000 00 00",
      message: "Hallo",
    };

    await new SchnuppernService(instance).submitForm(registration);

    expect(post).toHaveBeenCalledWith("form-join", registration);
  });
});
