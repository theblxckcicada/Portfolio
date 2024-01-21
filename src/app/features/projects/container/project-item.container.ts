import { Component, Input } from '@angular/core';
import { Project } from 'src/models';

@Component({
  selector: 'app-project-item-container',
  template: `<app-project-item [project]="project"></app-project-item>`,
  styles: [``],
})
export class ProjectItemContainer {
  @Input() project!: Project;
}
