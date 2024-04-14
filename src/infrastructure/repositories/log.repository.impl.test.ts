import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { LogRepositoryImpl } from "./log.repository.impl";

describe("log.repository.impl.ts", () => {
  const mockRepository = {
    saveLog: jest.fn(),
    getLogs: jest.fn(),
  };

  const logRepository = new LogRepositoryImpl(mockRepository);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("save log should call the datasource with arguments", async () => {
    const log = { level: LogSeverityLevel.high, message: "TEST" } as LogEntity;

    await logRepository.saveLog(log);

    expect(mockRepository.saveLog).toHaveBeenCalledWith(log);
  });

  test("get logs should call the datasource with arguments", async () => {
    const lowSeverity = LogSeverityLevel.medium;

    await logRepository.getLogs(lowSeverity);

    expect(mockRepository.getLogs).toHaveBeenCalledWith(lowSeverity);
  });
});
