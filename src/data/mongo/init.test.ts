import mongoose from "mongoose";
import { MongoDatabase } from "./init";

describe("init.ts", () => {
  afterAll(() => {
    mongoose.connection.close();
  });

  test("should connect to mongodb", async () => {
    const connected = await MongoDatabase.connect({
      mongoUrl: process.env.MONGO_URL!,
      dbName: process.env.MONGO_DB_NAME!,
    });

    expect(connected).toBe(true);
  });

  test("should throw an error", async () => {
    try {
      await MongoDatabase.connect({
        mongoUrl: "mongo url failed",
        dbName: process.env.MONGO_DB_NAME!,
      });

      expect(true).toBe(false);
    } catch (error) {}
  });
});
