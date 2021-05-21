import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ErrorService {
  name = this.constructor.name;
  id;

  constructor() {
    this.id = Math.round(Math.random() * 10000);
    console.log(`${this.constructor.name} con, id: ${this.id}`);
  }
}
