import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";
import { SendEmailLogs } from "./send-email-logs";

describe("send-email-logs.ts", () => {
  const mockLogRepository: LogRepository = {
    saveLog: jest.fn(),
    getLogs: jest.fn(),
  };
  const mockEmailService = {
    sendEmailWithFileSystemLogs: jest.fn().mockReturnValue(true),
  };

  const sendEmailLog = new SendEmailLogs(
    mockEmailService as any,
    mockLogRepository
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should call send email and save log", async () => {
    const result = await sendEmailLog.execute("vemiliogp@gmail.com");

    expect(result).toBe(true);
    expect(mockEmailService.sendEmailWithFileSystemLogs).toHaveBeenCalledTimes(1);
    expect(mockLogRepository.saveLog).toHaveBeenCalledWith(expect.any(LogEntity));
    expect(mockLogRepository.saveLog).toHaveBeenCalledWith({
      createdAt: expect.any(Date),
      level: LogSeverityLevel.low,
      message: `Log email sent`,
      origin: "send-email-logs.ts",
    });
  });

  test("should log in case of error", async () => {
    mockEmailService.sendEmailWithFileSystemLogs.mockReturnValue(false);

    const result = await sendEmailLog.execute("vemiliogp@gmail.com");

    expect(result).toBe(false);
    expect(mockEmailService.sendEmailWithFileSystemLogs).toHaveBeenCalledTimes(1);
    expect(mockLogRepository.saveLog).toHaveBeenCalledWith(expect.any(LogEntity));
    expect(mockLogRepository.saveLog).toHaveBeenCalledWith({
      createdAt: expect.any(Date),
      level: LogSeverityLevel.high,
      message: `Error: Email log not sent`,
      origin: "send-email-logs.ts",
    });
  });
});
