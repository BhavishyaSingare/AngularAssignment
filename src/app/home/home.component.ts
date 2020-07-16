import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jokes } from './Jokes';
import { LoginService } from '../Login/login.component.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  ngOnInit(): void {
  }

  
  loading = true;
  jokes: Jokes[] =[];
  private _jsonURL = 'https://official-joke-api.appspot.com/jokes/ten';

  constructor(private loginService : LoginService, private http : HttpClient) { 
    var data =this.getJSON().subscribe(data => {
      this.loading = false;
      console.log("constructor");
    this.jokes = data;
    
    
     console.log(this.jokes);

    });
  }

  
searchText;

  logOut()
  {
     this.loginService.logout();
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
 }

 getData()
 {
   var data = this.getJSON().subscribe(data => {
     console.log("sroll");
     for(var i =0; i<10; i++){
       this.jokes.push(data[i]);
     }
     this.loading = false;
     console.log(this.jokes);
   }
   )
   return Jokes;
 }

 
 onScroll()  
 {
     console.log("Scrolled"); 
     return this.getData();
 }
}
