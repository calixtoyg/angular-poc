import {Component, OnInit} from '@angular/core';
import {Person} from '../person';


@Component({
  selector: 'app-edades',
  templateUrl: './edades.component.html',
  styleUrls: ['./edades.component.css']
})
export class EdadesComponent implements OnInit {

  people: Person = {
    firstAge: 0,
    secondAge: 0,
    average: 0,
    sum: 0,
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  average(...numbers): number {
    const result = this.sum(numbers) / numbers.length;
    this.people.average = result;
    return result;
  }

  sum(numbers: number[]): number {
    this.people.sum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue);
    return this.people.sum;
  }

  clean(): void {
    this.people = {} as Person;
  }
}
