import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/apis/project.service';
import { CTF, Project } from 'src/models';

@Component({
  standalone: false,
  selector: 'app-project-container',
  template: `<app-project
    [web_projects]="web_project$ | async"
    [pentest_projects]="pentest_project$ | async"
    [ctf_projects]="ctf_project$ | async"
  ></app-project>`,
  styles: [``],
})
export class ProjectContainer {
  projectService = inject(ProjectService);
  web_project$: Observable<Project[]> = this.projectService.getWebProjects();
  pentest_project$: Observable<Project[]> =
    this.projectService.getPentestProjects();
  ctf_project$: Observable<CTF[]> = this.projectService.getCTFs();
}
