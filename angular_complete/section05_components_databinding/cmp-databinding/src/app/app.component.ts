import { Component } from '@angular/core';
import {
  ServerElement,
  ServerElementEvent,
} from './shared/types/server-element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements: ServerElement[] = [
    { type: 'server', name: 'TestServer', content: 'Just a test!' },
  ];

  onServerAdded(serverData: ServerElementEvent): void {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(serverData: ServerElementEvent): void {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onFirstChange(): void {
    this.serverElements[0].name = 'Changed';
  }
}
