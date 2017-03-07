import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {SuiModule} from 'ng2-semantic-ui/ng2-semantic-ui';
import {routing} from './app.router';

import { LoginComponent } from '../app/login';
import {CommentComponent} from '../app/comments';
import {App} from './app';

@NgModule({
  declarations: [
   LoginComponent,
    CommentComponent,
    App
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SuiModule,
    routing
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
