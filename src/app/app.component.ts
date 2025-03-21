import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  showNavbar : boolean = true;

  constructor(private router: Router){
    this.router.events.subscribe(() => {
      this.showNavbar = this.router.url !== '/notfound'
    })
  }
}
