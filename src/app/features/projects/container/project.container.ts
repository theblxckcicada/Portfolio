import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/apis/project.service';
import { Project } from 'src/models';

@Component({
  selector: 'app-project-container',
  template: `<app-project [projects]="project$ | async"></app-project>`,
  styles: [``],
})
export class ProjectContainer {
  projectService = inject(ProjectService);
  project$: Observable<Project[]> = this.projectService.getProjects();
}
