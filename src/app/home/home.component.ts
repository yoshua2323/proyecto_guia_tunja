import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('moveUpDown', [
      state('initial', style({
        transform: 'translateY(0)'
      })),
      state('moved', style({
        transform: 'translateY(-20px)'
      })),
      transition('initial <=> moved', [
        animate('0.5s ease-in-out')
      ]),
    ]),
  ]
})
export class HomeComponent {
  isMoved = false; // Controla el estado de la animación

  toggleAnimation() {
    this.isMoved = !this.isMoved;
  }
}
