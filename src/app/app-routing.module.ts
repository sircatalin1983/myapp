import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { AuthenticationGuard } from './core/authentication/authentication.guard';
/*
const routes: Routes = [
  Shell.childRoutes([{ path: 'about', loadChildren: 'app/about/about.module#AboutModule' }]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
//*/
/*
const routes: Routes = [
  {
      path: '',
      loadChildren: './layout/layout.module#LayoutModule',
      canActivate: [AuthenticationGuard]
  },
  {
      path: 'login',
      loadChildren: './login/login.module#LoginModule'
  }
];
//*/

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'login',
      loadChildren: 'app/login/login.module#LoginModule'
    },
    {
      path: '',
      loadChildren: './layout/layout.module#LayoutModule',
      canActivate: [AuthenticationGuard]
    }
  ]),
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  //imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  //providers: []
  providers: [AuthenticationGuard]
})
export class AppRoutingModule {}
