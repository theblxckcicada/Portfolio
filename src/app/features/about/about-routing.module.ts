import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { AboutContainer } from './container';

const routes: Route[] = [
  {
    path: '',
    component: AboutContainer,
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
