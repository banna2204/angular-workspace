import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorld } from 'tools';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = signal('first-app');
  helloWorld = inject(HelloWorld);

  ngOnInit() {
    this.title.set(this.helloWorld.getMessage());
  }
}
