import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorld } from 'tools';
import { CustomButton } from 'tools'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CustomButton],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('second-app');

  helloWorld = inject(HelloWorld);

  ngOnInit() {
    this.title.set(this.title() + this.helloWorld.getMessage());
  }
}
