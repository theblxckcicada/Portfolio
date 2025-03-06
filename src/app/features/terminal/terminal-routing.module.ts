import { NgModule } from '@angular/core';
import { TerminalContainer } from './container';
import { Route, Router, RouterModule } from '@angular/router';

const routes: Route[] = [{ path: '', component: TerminalContainer }];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerminalRoutingModule {}
