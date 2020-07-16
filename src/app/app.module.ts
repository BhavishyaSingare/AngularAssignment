import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule } from '@angular/material/icon';
import {MatInputModule } from '@angular/material/input';
import {MatFormFieldModule } from '@angular/material/form-field';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './Login/login.component';
import { LoginService } from './Login/login.component.service';
import { AuthService } from './auth.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
//import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

  
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    InfiniteScrollModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
   // ScrollDispatchModule,
    FormsModule, ReactiveFormsModule,Ng2SearchPipeModule,
    BrowserModule,MatButtonModule,
    MatIconModule ,
    RouterModule,
    MatInputModule,
    AppRoutingModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
  ],
  providers: [LoginService,AuthService,LoginComponent,HomeComponent,AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
