import { Component, Input } from '@angular/core';
import { Project } from 'src/models';

@Component({
  standalone: false,
  selector: 'app-project-item-container',
  template: `<app-project-item
    [project]="project"
    [isVideo]="isVideo"
  ></app-project-item>`,
  styles: [``],
})
export class ProjectItemContainer {
  @Input() project!: Project;
  @Input() isVideo = false;
}
