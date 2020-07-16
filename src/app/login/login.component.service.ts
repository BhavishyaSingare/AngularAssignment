import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable()
export class LoginService{

  isLoggedIn = false;
  isLoading = true;
  // store the URL so we can redirect after logging in
  redirectUrl: string;

constructor( private router : Router){}

    
  OnSubmit(profileForm : FormGroup)
  {
    //this.isLoading = true;
    console.log(this.isLoading);
    console.log(profileForm.get('email').value);
    if(profileForm.get('email').value =='bhavishyaSingare@gmail.com'
          &&profileForm.get('password').value =='12345')
          {
            this.isLoading = false;
          this.router.navigate(['/home']);

          this.isLoggedIn = true;
                    return true;}
    else
    {
    window.alert("Invalid Credentials");
    return false;
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
