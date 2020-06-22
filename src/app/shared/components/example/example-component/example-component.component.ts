import {Component, EventEmitter, Input, Output, OnInit, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {InterfaceExample} from '../../../interfaces/interface-example';

@Component({
  selector: 'app-example-component',
  templateUrl: './example-component.component.html',
  styleUrls: ['./example-component.component.scss']
})
export class ExampleComponentComponent implements OnInit, OnChanges, OnDestroy {

  @Input() input: InterfaceExample;
  @Output() output = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.output.emit('OnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.output.emit('OnChange');
  }

  ngOnDestroy(): void{
    this.output.emit('OnDestroy');
  }
}
