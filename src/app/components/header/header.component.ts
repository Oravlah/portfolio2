import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export default class HeaderComponent {

  constructor(
    private router: Router,
  ) {}

  irAInicio(){
    this.router.navigate(['/inicio'])
  }

  irASobremi(){
    this.router.navigate(['/sobremi'])
  }

  irAHabilidades(){
    this.router.navigate(['/habilidades'])
  }

  irAHerramientas(){
    this.router.navigate(['/herramientas'])
  }
}
