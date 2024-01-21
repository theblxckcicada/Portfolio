import { NgModule } from '@angular/core';
import { SkillContainer } from './container';
import { Route, Router, RouterModule } from '@angular/router';

const routes: Route[] = [{ path: '', component: SkillContainer }];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillRoutingModule {}
