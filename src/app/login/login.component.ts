import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {LoginService} from './login.component.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit() {
  }

  hide = true;

  profileForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('')
  });

  constructor(private router: Router, private loginService : LoginService) {}
 


  OnSubmit()
  {
    return  this.loginService.OnSubmit(this.profileForm);
  }

  getErrorMessage() {
    if (this.profileForm["email"].hasError('required')) {
      return 'You must enter a value';
    }

    return this.profileForm["email"].hasError('email') ? 'Not a valid email' : '';
  }


}