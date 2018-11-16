import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { ForgotPasswordComponent } from './forgot-password.component';

const routes: Routes = [
  { path: 'login', component: ForgotPasswordComponent, data: { title: extract('ForgotPasswordComponent') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LoginRoutingModule {}
