import { NgModule } from '@angular/core';
import { ProjectComponent, ProjectItemComponent } from './container/component';
import { ProjectContainer, ProjectItemContainer } from './container';
import { CommonModule } from '@angular/common';
import { ApplicationCommonModule } from 'src/app/common';
import { ProjectRoutingModule } from './project-routing.module';

const Components = [
  ProjectComponent,
  ProjectContainer,
  ProjectItemComponent,
  ProjectItemContainer,
];
@NgModule({
  declarations: [Components],
  imports: [CommonModule, ApplicationCommonModule, ProjectRoutingModule],
  exports: [Components, ProjectRoutingModule],
})
export class ProjectModule {}
