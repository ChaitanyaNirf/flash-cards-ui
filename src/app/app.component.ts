import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'flashCardsFrontEnd';
  constructor() {
    if(localStorage.getItem('theme') === 'dark'){
      document.body.classList.add('dark-theme');
    }
  }
}
