import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css'],
})
export class NumbersComponent {
  factor = 1;
  number = 1;

  get10() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  /*add() {
    this.number++;
  }

  getRandomNumbers() {
    return [
      100 * Math.random(),
      100 * Math.random(),
      100 * Math.random(),
      100 * Math.random(),
      100 * Math.random(),
      100 * Math.random(),
    ];
  }*/
}
