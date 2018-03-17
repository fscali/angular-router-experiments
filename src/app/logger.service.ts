import { Injectable } from "@angular/core";

@Injectable()
export class LoggerService {
  messages: any[] = [];
  constructor() {}

  log(message: string, severity: string = "info") {
    this.messages.push({ message, severity });
  }

  clear() {
    this.messages = [];
  }

  getMessages(): string[] {
    return this.messages;
  }
}
