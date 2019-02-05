import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-tester',
  templateUrl: './grid-tester.component.html',
  styleUrls: ['./grid-tester.component.css']
})
export class GridTesterComponent implements OnInit {
  private solutions: Number[][][];
  private currentAttempt: Number[][];
  private solved: boolean;
  public showWip: boolean;

  constructor() { }

  ngOnInit() {
    this.solved = false;
    this.showWip = false;
    this.currentAttempt = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    this.solutions =
      [[[1, 1, 1, 1],
      [0, 1, 0, 1],
      [0, 0, 1, 1],
      [0, 0, 0, 1]],

      [[1, 0, 0, 0],
      [1, 1, 0, 0],
      [1, 0, 1, 0],
      [1, 1, 1, 1]],

      [[1, 1, 1, 1],
      [1, 0, 1, 0],
      [1, 1, 0, 0],
      [1, 0, 0, 0]],

      [[0, 0, 0, 1],
      [0, 0, 1, 1],
      [0, 1, 0, 1],
      [1, 1, 1, 1]],

      [[1, 1, 1, 1],
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 0, 1]],

      [[1, 0, 0, 1],
      [0, 1, 0, 1],
      [1, 1, 1, 1],
      [0, 0, 0, 1]],

      [[1, 0, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 1, 0],
      [1, 1, 1, 1]],

      [[1, 0, 0, 0],
      [1, 1, 1, 1],
      [1, 0, 1, 0],
      [1, 0, 0, 1]],

      [[0, 1, 0, 1],
      [0, 1, 1, 0],
      [0, 1, 0, 0],
      [1, 1, 1, 1]],

      [[1, 0, 0, 1],
      [1, 1, 1, 1],
      [1, 1, 0, 0],
      [1, 0, 0, 0]],

      [[0, 0, 0, 1],
      [1, 1, 1, 1],
      [0, 1, 0, 1],
      [1, 0, 0, 1]],

      [[1, 1, 1, 1],
      [0, 0, 1, 0],
      [0, 1, 1, 0],
      [1, 0, 1, 0]],

      [[1, 1, 1, 1],
      [0, 1, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 1]],

      [[0, 0, 1, 1],
      [0, 0, 1, 0],
      [0, 1, 1, 0],
      [1, 1, 1, 1]],

      [[1, 0, 0, 1],
      [1, 1, 1, 1],
      [1, 1, 0, 0],
      [1, 0, 0, 0]],

      [[1, 1, 1, 1],
      [0, 1, 1, 0],
      [0, 1, 0, 0],
      [1, 1, 0, 0]],

      [[1, 0, 0, 0],
      [1, 1, 0, 0],
      [1, 1, 1, 1],
      [1, 0, 0, 1]],

      [[0, 0, 0, 1],
      [0, 0, 1, 1],
      [1, 1, 1, 1],
      [1, 0, 0, 1]],

      [[1, 0, 0, 1],
      [1, 1, 1, 1],
      [0, 0, 1, 1],
      [0, 0, 0, 1]],

      [[1, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [1, 1, 1, 1]],

      [[1, 0, 1, 0],
      [1, 1, 1, 1],
      [0, 0, 1, 0],
      [0, 0, 1, 1]],

      [[1, 1, 0, 0],
      [0, 1, 0, 0],
      [1, 1, 1, 1],
      [0, 1, 0, 1]],

      [[0, 1, 0, 1],
      [1, 1, 1, 1],
      [0, 1, 0, 0],
      [1, 1, 0, 0]],

      [[0, 0, 1, 1],
      [0, 0, 1, 0],
      [1, 1, 1, 1],
      [1, 0, 1, 0]],
      ];
  }

  public setGrid(number: number, number2: number) {

    if (this.currentAttempt[number][number2] === 0) {
      this.currentAttempt[number][number2] = 1;
    } else {
      this.currentAttempt[number][number2] = 0;
    }
  }

  public checkGrid() {
    this.solved = false;
    const checkedAttempt = this.currentAttempt;
    let counter = 0;

    checkedAttempt.forEach(e =>
      e.forEach(f => {
        if (f === 1) {
          counter = counter + 1;
        }
      }));
    console.log(counter);
    if (counter === 9) {
      console.log(checkedAttempt.toString());
      console.log(this.solutions[0].toString());

      this.solutions.forEach(element => {
        if (checkedAttempt.toString() === element.toString()) {
          this.solved = true;
          console.log(this.solved);
        }
      });
    }

  }



}
