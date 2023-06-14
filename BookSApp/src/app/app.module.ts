import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './public-component/about-us/about-us.component';
import { HowItWorksComponent } from './public-component/how-it-works/how-it-works.component';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './public-component/home/home.component';


@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    AboutUsComponent,
    HowItWorksComponent,
   
  ],
  //Add multiple Routes used in the application
  //Here Order Matters
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
