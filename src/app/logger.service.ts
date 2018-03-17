import { Injectable } from "@angular/core";

@Injectable()
export class LoggerService {
  messages: string[] = [];
  constructor() {}

  log(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  getMessages(): string[] {
    return this.messages;
  }
}
