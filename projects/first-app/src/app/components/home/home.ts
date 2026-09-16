import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  
  SecondAppWithData(){
    const data = JSON.stringify({'requestFrom':'First-app', 'token':'abc123'});
    // sessionStorage.setItem('auth',JSON.stringify(data));

    window.location.href = `http://localhost:4201?data=${data}`;
  }
}
