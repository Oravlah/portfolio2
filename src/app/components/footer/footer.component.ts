import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export default class FooterComponent {

  constructor(
  ){}


  redirectToLinkedIn() {
    window.open('https://www.linkedin.com/in/innonautas/', '_blank');
  }
}
