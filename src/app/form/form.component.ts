import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  name: string = '';
  userDate: string = '';
  amount: number = 0;
  convertedValue: string = '';

  constructor() {}

  ngOnInit(): void {}

  onNameChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.name = inputElement.value;
  }

  onDateChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.userDate = inputElement.value;
  }

  onAmountChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.amount = parseInt(inputElement.value);
  }

  onConvertChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.convertedValue = inputElement.value;
  }
}
