import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

//Component Import
import { AppComponent } from './app.component';
import { HeaderComponent } from './main-header/header/header.component';
import { SignInComponent } from './main-body/authentication/sign-in/sign-in.component';
import { SignUpComponent } from './main-body/authentication/sign-up/sign-up.component';
import { FooterComponent } from './main-footer/footer/footer.component';
import { FeedPageComponent } from './main-body/news-feed/feed-page/feed-page.component';


@NgModule({
  declarations: [
    AppComponent,
    //main-header
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    FooterComponent,
    FeedPageComponent
    //main-body
    //main-footer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
