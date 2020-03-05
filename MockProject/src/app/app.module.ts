import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
<<<<<<< HEAD
import { SignInComponent } from './sign-in/sign-in.component';
=======
import { HomeComponent } from './home/home.component';
>>>>>>> 9fe1131504813ec9e037ad2aefbd037e4e09c564

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
<<<<<<< HEAD
    SignInComponent
=======
    HomeComponent
>>>>>>> 9fe1131504813ec9e037ad2aefbd037e4e09c564
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
