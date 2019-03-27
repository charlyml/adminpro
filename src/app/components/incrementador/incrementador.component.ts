import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent implements OnInit {
  @Input() leyenda: string;
  @Input() percentage: number;

  constructor() {
    this.percentage = 50;
    this.leyenda = 'Leyenda';
  }

  ngOnInit() {
  }

  changeValue(value: number) {
    this.percentage = this.percentage + value;
  }

}
