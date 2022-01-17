import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { MenuComponent } from './components/menu/menu/menu.component';
import { PageNotFoundComponent } from './components/PageNotFound/page-not-found/page-not-found.component';

const routes: Routes = [
  { path : 'login', component : LoginComponent },
  { path : 'menu-principal', component : MenuComponent },
  { path : '', component : LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
