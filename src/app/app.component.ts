import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Week2';
  total: number = 0;


  myName = "lachlan van der Velden's Ums";

  onCounted(value: number) {
    this.total += value;
  }
}
