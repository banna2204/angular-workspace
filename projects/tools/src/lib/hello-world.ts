import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelloWorld {
  getMessage(): string {
    return 'Hello World123';
  }
}
