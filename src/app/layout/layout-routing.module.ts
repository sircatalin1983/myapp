import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: '',
      redirectTo: '/blank-page',
      pathMatch: 'full'
    },
    {
      path: 'blank-page',
      component: LayoutComponent,
      loadChildren: './blank-page/blank-page.module#BlankPageModule'
    }
  ])
];

/*
const routes: Routes = [
  {
      path: '',
      component: LayoutComponent,
      children: [
          {
              path: '',
              redirectTo: 'blank-page'
          },
          {
              path: 'blank-page',
              loadChildren: './blank-page/blank-page.module#BlankPageModule'
          }
      ]
  }
];
//*/
/*
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
//*/

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
