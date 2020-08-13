import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Week2';
  contacts: string[] = [
    "Bob",
    "Frank",
  ];


  showContacts: boolean = true;

  onToggleContacts() {
    // if(this.showContacts == true){
    //   this.showContacts = false;
    // }else {
    //   this.showContacts = true;
    // }
    this.showContacts = !this.showContacts;
  }
  
}
