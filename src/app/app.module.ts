import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { RoverFormComponent } from './rover-form/rover-form.component';


@NgModule({
  declarations: [
    AppComponent,
    PhotosListComponent,
    RoverFormComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
