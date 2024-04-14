import { envs } from "./envs.plugin";

describe("envs.plugin.ts", () => {
  test("should return env options", () => {
    expect(envs).toEqual({
      PORT: 3000,
      MAILER_EMAIL: "vemiliogp@gmail.com",
      MAILER_SECRET_KEY: "123456",
      MAILER_SERVICE: "gmail",
      PROD: false,
      MONGO_URL: "mongodb://vgonzalez:123456789@localhost:27017",
      MONGO_DB_NAME: "NOC_TEST",
      MONGO_USER: "vgonzalez",
      MONGO_PASS: "123456789",
    });
  });

  test("should return error if not found env", async () => {
    jest.resetModules();
    process.env.PORT = "ABC";

    try {
      await import("./envs.plugin");

      expect(true).toBe(false);
    } catch (error) {
      expect(`${error}`).toContain('"PORT" should be a valid integer');
    }
  });
});
