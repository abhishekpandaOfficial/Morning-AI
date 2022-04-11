import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { UserModule } from './user/user.module';
import { NavComponent } from './nav/nav.component';
// If we want any class to be a Module then we have to add that class with  "@NgModule"  decorator 
@NgModule({

  // All the Components of Modules are Registered here
  declarations: [
    AppComponent,
    NavComponent
    
  ],
  // All the Modules are registered here
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    UserModule,
    
  ],
  // All the Services are registered here 
  providers: [],

  // Which Component will load first , it will be registered here 
  bootstrap: [AppComponent]
})

// If we want any clas to expose outside then we have to mark "export" as Prefix 
export class AppModule { }
