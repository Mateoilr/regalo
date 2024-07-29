import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button1',
  standalone: true,
  imports: [],
  templateUrl: './button1.component.html',
  styleUrl: './button1.component.css'
})
export class Button1Component {
  constructor(private route:Router){

  }

  goToPantalla2(){
    this.route.navigateByUrl('Contador');
  }
}

