import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/apis/project.service';
import { Project } from 'src/models';

@Component({
  selector: 'app-project-container',
  template: `<app-project
    [web_projects]="web_project$ | async"
    [pentest_projects]="pentest_project$ | async"
  ></app-project>`,
  styles: [``],
})
export class ProjectContainer {
  projectService = inject(ProjectService);
  web_project$: Observable<Project[]> = this.projectService.getWebProjects();
  pentest_project$: Observable<Project[]> =
    this.projectService.getPentestProjects();
}
