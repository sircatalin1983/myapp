import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthenticationGuard } from './core/authentication/authentication.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './layout/layout.module#LayoutModule',
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'login',
    loadChildren: './security/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: './security/register/register.module#RegisterModule'
  },
  {
    path: 'forgot-password',
    loadChildren: './security/forgot-password/forgot-password.module#ForgotPasswordModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthenticationGuard]
})
export class AppRoutingModule {}
