import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { HelloWorld } from 'tools';
import { CustomButton } from 'tools'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomButton],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('second-app');

  // tokenData = signal<string>;
  helloWorld = inject(HelloWorld);
  route = inject(ActivatedRoute);
  data:any

  ngOnInit() {
    this.title.set(this.title() + this.helloWorld.getMessage());

    this.route.queryParams.subscribe((params:any) => {
      if (params['data']) {
        this.data = JSON.parse(params['data']);
        console.log(this.data.token)
      }
    });


    // const tokenData = JSON.parse(localStorage.getItem('auth') || '{}');
    // console.log(tokenData);

    // const auth = sessionStorage.getItem('auth');
    // console.log(auth);
    // const tokenData = auth ? JSON.parse(auth) : null;

    // console.log(tokenData);

    // localStorage.removeItem('auth');
  }

  // redirectToFirstApp() {
  //   window.location.href = 'http://localhost:4200/'
  // }
}
