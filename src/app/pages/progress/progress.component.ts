import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  percentage: number;
  percentage2: number;

  constructor() {
    this.percentage = 20;
    this.percentage2 = 30;
  }

  ngOnInit() {
  }

}
