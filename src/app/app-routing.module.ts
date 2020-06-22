import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ExampleScreenComponent} from './shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ExampleScreenComponent,
    // children: [
    //   {
    //     path: '',
    //     component: ,
    //   }
    // ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
