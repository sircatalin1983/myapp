import { NgModule } from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';

import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

import { BlankPageComponent } from './blank-page.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: '',
      component: BlankPageComponent
    }
  ])
];

/*
const routes: Routes = [
    {
        path: '',
        component: BlankPageComponent
    }
];
//*/
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlankPageRoutingModule {}
