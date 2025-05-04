import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export default class InicioComponent {

  constructor(
    private router: Router
  ){}


  redirectToLinkedIn() {
    window.open('https://www.linkedin.com/in/innonautas/', '_blank');
  }

}
