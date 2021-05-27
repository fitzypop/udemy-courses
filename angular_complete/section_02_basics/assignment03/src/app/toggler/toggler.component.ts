import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggler',
  templateUrl: './toggler.component.html',
  styleUrls: ['./toggler.component.css'],
})
export class TogglerComponent implements OnInit {
  btnLog: string[] = [];
  displayText = true;
  constructor() {}

  ngOnInit(): void {}

  onButtonClick() {
    // First, toggle the text
    // Second, log the DateTime of the button click
    this.displayText = !this.displayText;
    const now = new Date();

    this.btnLog.push(
      `Button clicked at ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`
    );
    console.log(this.btnLog);
  }

  getStyles(index: number) {
    const backColor = index >= 4 ? 'blue' : 'transparent';
    const textColor = index >= 4 ? 'white' : 'black';
    return {
      backgroundColor: backColor,
      color: textColor,
    };
  }
}
