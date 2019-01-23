import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username = '';

// my solution - not as elegent as course solution!
/*   buttonEnabled = false;

  onUpdateUserName(){
    this.buttonEnabled = true;
  }

  onButtonClick(event: Event){
    this.username='';
    this.buttonEnabled=false;
  }  */
}