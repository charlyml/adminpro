import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() leyenda: string;
  @Input() percentage: number;

  @Output() valueChange: EventEmitter<number>;

  constructor() {
    this.percentage = 50;
    this.leyenda = 'Leyenda';
    this.valueChange = new EventEmitter();
  }

  ngOnInit() {
  }

  onChanges(newValue: number) {
    if (newValue >= 100) {
      this.percentage = 100;
    } else if (newValue <= 0) {
      this.percentage = 0;
    } else {
      this.percentage = newValue;
    }

    this.txtProgress.nativeElement.value = this.percentage;
    this.valueChange.emit(this.percentage);
  }

  changeValue(value: number) {
    if (this.percentage >= 100 && value > 0) {
      this.percentage = 100;
      return;
    }

    if (this.percentage <= 0 && value < 0) {
      this.percentage = 0;
      return;
    }

    this.percentage = this.percentage + value;

    this.valueChange.emit(this.percentage);

    this.txtProgress.nativeElement.focus();
  }

}
