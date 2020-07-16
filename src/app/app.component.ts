import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularAssignment';

  constructor(private home : HomeComponent)
  {

  }
  
  logOut()
  {
    this.home.logOut();
  }

}
