import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // tag selector
  // selector: '[app-servers]', // attribute selector
  // selector: '.app-servers', // class selector
  template: ` <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}