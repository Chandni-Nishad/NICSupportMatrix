import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HODFormComponent } from '../hodform/hodform.component';

@Component({
  selector: 'app-hodlongin',
  standalone: true,
  imports: [RouterLink, HODFormComponent],
  templateUrl: './hodlongin.component.html',
  styleUrl: './hodlongin.component.css'
})
export class HODLonginComponent {

}
