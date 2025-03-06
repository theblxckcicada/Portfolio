import { NgModule } from '@angular/core';
import { TerminalComponent } from './container/component';
import { TerminalContainer } from './container';
import { ApplicationCommonModule } from 'src/app/common';
import { TerminalRoutingModule } from './terminal-routing.module';

const Components = [TerminalComponent, TerminalContainer];
@NgModule({
  declarations: [Components],
  imports: [TerminalRoutingModule, ApplicationCommonModule],
  exports: [Components],
})
export class TerminalModule {}
