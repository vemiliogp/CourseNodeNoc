import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDataSource()
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
    //   new CheckService(
    //     fileSystemLogRepository,
    //     () => console.log(`${url} is ok`),
    //     (error) => console.error(error)
    //   ).execute(url);
    // });
  }
}
