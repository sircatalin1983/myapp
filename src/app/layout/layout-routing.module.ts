import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'charts',
        loadChildren: './blank-page/blank-page.module#BlankPageModule'
      },
      {
        path: 'components',
        loadChildren: './blank-page/blank-page.module#BlankPageModule'
      },
      {
        path: 'forms',
        loadChildren: './blank-page/blank-page.module#BlankPageModule'
      },
      {
        path: 'grid',
        loadChildren: './blank-page/blank-page.module#BlankPageModule'
      },
      {
        path: 'tables',
        loadChildren: './blank-page/blank-page.module#BlankPageModule'
      },
      {
        path: 'blank-page',
        loadChildren: './blank-page/blank-page.module#BlankPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
