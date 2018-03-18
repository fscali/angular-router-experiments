import { Injectable } from "@angular/core";

@Injectable()
export class LoggerService {
  messages: any[] = [];
  constructor() {}

  leftPad(number: number, n: number) {
    let str = "" + number;
    while (str.length < n) {
      str = "0" + str;
    }
    return str;
  }

  getTime() {
    var currentdate = new Date();
    var datetime =
      this.leftPad(currentdate.getHours(), 2) +
      ":" +
      this.leftPad(currentdate.getMinutes(), 2) +
      ":" +
      this.leftPad(currentdate.getSeconds(), 2) +
      "." +
      this.leftPad(currentdate.getMilliseconds(), 3);
    return datetime;
  }

  log(message: string, severity: string = "info") {
    this.messages.push({
      message: `${this.getTime()} ${message}`,
      severity: severity
    });
  }

  clear() {
    this.messages = [];
  }

  getMessages(): string[] {
    return this.messages;
  }
}
