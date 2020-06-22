import { Component, OnInit } from '@angular/core';
import {InterfaceExample} from '../../interfaces/interface-example';

@Component({
  selector: 'app-example-screen',
  templateUrl: './example-screen.component.html',
  styleUrls: ['./example-screen.component.scss']
})
export class ExampleScreenComponent implements OnInit {

  inputExample: InterfaceExample;

  constructor() { }

  ngOnInit(): void {
    this.inputExample = {
      required: 'Required',
      variable: 123,
      array: [1, 2, 3],
      object: {}
    };
  }

  onEmit(event: any): void {
    console.log(event);
  }
}
