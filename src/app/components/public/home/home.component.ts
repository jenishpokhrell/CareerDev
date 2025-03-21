import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AboutUsComponent } from '../about-us/about-us.component';

@Component({
  selector: 'app-home',
  standalone : true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  homeHeading: string = 'Find a job that aligns with your interests and skills';
  homePara: string = 'This is the time you commence you career and work on your goals as we bring you the tech jobs right at your device'
  homeSlogan : string = 'A portal of hope'
  jobsProvided: string = 'Do you know how to '
}
