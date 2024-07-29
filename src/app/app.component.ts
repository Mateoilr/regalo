import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pant1Component } from '../pages/pant1/pant1.component';
import { Pant2Component } from '../pages/pant2/pant2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Pant1Component, Pant2Component ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'regalo';
}
