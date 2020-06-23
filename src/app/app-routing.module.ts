import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

const redirectAuthUsers = () => redirectLoggedInTo(['to-do']);
const redirectUnauthUsers = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectAuthUsers),
  },
  {
    path: 'register',
    component: RegisterComponent,
    ...canActivate(redirectAuthUsers),
  },
  {
    path: 'to-do',
    component: ToDoListComponent,
    ...canActivate(redirectUnauthUsers),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
