import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import HeaderComponent from '../../components/header/header.component';
import BodyComponent from '../../components/body/body.component';
import FooterComponent from '../../components/footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, BodyComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export default class LayoutComponent {

}
