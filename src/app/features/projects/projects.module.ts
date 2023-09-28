import { NgModule } from '@angular/core';
import { ProjectsRoutingModule } from '.';
import { ProjectsContainer } from './container';
import { ProjectsComponent } from './container/components';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ProjectsContainer, ProjectsComponent],
  imports: [ProjectsRoutingModule, CommonModule],
  exports: [ProjectsRoutingModule, ProjectsContainer, ProjectsComponent],
})
export class ProjectsModule {}
