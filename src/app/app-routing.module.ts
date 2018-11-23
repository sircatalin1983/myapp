import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthenticationGuard } from './core/authentication/authentication.guard';
import { LoginComponent } from '@app/security/login/login.component';
import { RegisterComponent } from '@app/security/register/register.component';
import { ForgotPasswordComponent } from '@app/security/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: 'layout',
    loadChildren: './layout/layout.module#LayoutModule'
  },
  {
    path: 'auth',
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'login',
        component: LoginComponent,
        loadChildren: './security/login/login.module#LoginModule'
      },
      {
        path: 'register',
        component: RegisterComponent,
        loadChildren: './security/register/register.module#RegisterModule'
      },
      {
        path: 'forgotpassword',
        component: ForgotPasswordComponent,
        loadChildren: './security/forgot-password/forgot-password.module#ForgotPasswordModule'
      }
    ]
  },
  { path: '', redirectTo: 'layout', pathMatch: 'full' },
  { path: '**', redirectTo: 'layout' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthenticationGuard]
})
export class AppRoutingModule {}
