import { LogEntity, LogSeverityLevel } from "./log.entity";

describe("log.entity.ts", () => {
  const dataObj = {
    message: "Test message",
    level: LogSeverityLevel.low,
    origin: "log.entity.test.ts",
  };

  test("should create a log entity instance", () => {
    const log = new LogEntity({
      message: "Test message",
      level: LogSeverityLevel.low,
      origin: "log.entity.test.ts",
    });

    expect(log).toBeInstanceOf(LogEntity);
    expect(log.message).toBe(dataObj.message);
    expect(log.level).toBe(dataObj.level);
    expect(log.origin).toBe(dataObj.origin);
    expect(log.createdAt).toBeInstanceOf(Date);
  });

  test("should create a log entity instance from json", () => {
    const json =
      '{"message":"Service https://google.com working","level":"low","origin":"check-service.ts","createdAt":"2024-04-13T19:41:20.978Z"}';

    const log = LogEntity.fromJson(json);

    expect(log).toBeInstanceOf(LogEntity);
    expect(log.message).toBe("Service https://google.com working");
    expect(log.level).toBe(LogSeverityLevel.low);
    expect(log.origin).toBe("check-service.ts");
    expect(log.createdAt).toBeInstanceOf(Date);
  });

  test("should create a log entity instance from object", () => {
    const log = LogEntity.fromObject(dataObj);

    expect(log).toBeInstanceOf(LogEntity);
    expect(log.message).toBe(dataObj.message);
    expect(log.level).toBe(dataObj.level);
    expect(log.origin).toBe(dataObj.origin);
    expect(log.createdAt).toBeInstanceOf(Date);
  });
});
