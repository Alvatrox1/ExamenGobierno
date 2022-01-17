import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login/login.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu/menu.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { PageNotFoundComponent } from './components/PageNotFound/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    MenuComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    

  ],
  exports : [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
