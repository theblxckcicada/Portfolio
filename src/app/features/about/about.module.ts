import { NgModule } from '@angular/core';
import { AboutComponent } from './container/component';
import { AboutContainer } from './container';
import { AboutRoutingModule } from './about-routing.module';
import { ApplicationCommonModule } from 'src/app/common';

const Components = [AboutComponent, AboutContainer];
@NgModule({
  declarations: [Components],
  imports: [AboutRoutingModule, ApplicationCommonModule],
  exports: [Components, AboutRoutingModule],
})
export class AboutModule {}
