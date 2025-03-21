import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [NgIf, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  selectedImage : string | ArrayBuffer | null = null;



  onFileSelected(event:Event) : void{
    const input = event.target as HTMLInputElement

    if(!input.files || input.files.length == 0)
      return;

    const file = input.files[0]
      const reader = new FileReader();

      reader.onload = () => {
        this.selectedImage = reader.result as string | ArrayBuffer
      }

      reader.readAsDataURL(file)
  }
}
