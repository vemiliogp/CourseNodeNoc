import { CheckService } from "../domain/use-cases/checks/check-service";
import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDataSource } from "../infrastructure/datasources/mongo-log.datasource";
import { PostgresLogDataSource } from "../infrastructure/datasources/postgres-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const fsLogRepository = new LogRepositoryImpl(new FileSystemDataSource());
const mongoLogRepository = new LogRepositoryImpl(new MongoLogDataSource());
const postgresLogRepository = new LogRepositoryImpl(
  new PostgresLogDataSource()
);
const emailService = new EmailService();

export class Server {
  public static start() {
    console.log("Server started...");

    // new SendEmailLogs(emailService, fileSystemLogRepository).execute([
    //   "vemiliogp@icloud.com",
    //   "aynat.rondon@gmail.com",
    // ]);

    // CronService.createJob("*/5 * * * * *", () => {
    //   const url = "https://google.com";
    //   new CheckServiceMultiple(
    //     [fsLogRepository, mongoLogRepository, postgresLogRepository],
    //     () => console.log(`${url} is ok`),
    //     (error) => console.error(error)
    //   ).execute(url);
    // });
  }
}
