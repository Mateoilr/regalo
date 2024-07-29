import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-pant2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pant2.component.html',
  styleUrls: ['./pant2.component.css']
})
export class Pant2Component implements OnInit {
  countdownDate: Date = new Date('July 27, 2024 00:00:00');
  timeLeft: any;
  interval: any;
  showConfetti: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown() {
    this.interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = this.countdownDate.getTime() - now;

      this.timeLeft = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      };

      if (distance < 0) {
        clearInterval(this.interval);
        this.showConfetti = true;
      }
    }, 1000);
  }
}