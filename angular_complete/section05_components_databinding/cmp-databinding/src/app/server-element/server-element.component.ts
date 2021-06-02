import {
  Component,
  OnInit,
  OnChanges,
  Input,
  ViewEncapsulation,
  SimpleChanges,
} from '@angular/core';
import { ServerElement } from '../shared/types/server-element';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated, // this is default, don't need to add
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element: ServerElement;
  constructor() {}
  @Input() name: string;
  ngOnInit(): void {
    console.log('ngOnInit called for ServerElementComponent');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called for ServerElementComponent');
    console.log(changes);
  }
}
