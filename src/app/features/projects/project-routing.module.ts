import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ProjectContainer } from './container';

const routes: Route[] = [{ path: '', component: ProjectContainer }];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
