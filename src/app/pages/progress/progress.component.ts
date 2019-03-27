import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  percentage: number;

  constructor() {
    this.percentage = 50;
  }

  ngOnInit() {
  }

}
