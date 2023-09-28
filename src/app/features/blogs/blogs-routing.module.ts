import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsContainer } from './container';

const routes: Routes = [
  {
    path: '',
    component: BlogsContainer,
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsRoutingModule {}
