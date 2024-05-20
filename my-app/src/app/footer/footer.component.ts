import { Component } from '@angular/core';
import { AboutthewebsiteComponent } from '../aboutthewebsite/aboutthewebsite.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [AboutthewebsiteComponent,RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
