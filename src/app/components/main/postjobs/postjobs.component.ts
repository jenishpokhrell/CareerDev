import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-postjobs',
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './postjobs.component.html',
  styleUrl: './postjobs.component.css'
})
export class PostjobsComponent {

}
