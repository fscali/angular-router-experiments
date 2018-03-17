import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {
  private counter: number;
  constructor() {
    this.counter = 0;
  }

  getCounter(): number {
    return this.counter++;
  }
}
