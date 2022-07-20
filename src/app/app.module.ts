import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './home/main/main.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { BodyComponent } from './home/body/body.component';
import { InputRedirectWikiComponent } from './home/body/input-redirect-wiki/input-redirect-wiki.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    BodyComponent,
    InputRedirectWikiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
