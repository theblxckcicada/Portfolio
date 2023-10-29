import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/apis/project.service';
import { Project } from 'src/models';

@Component({
  selector: 'app-projects-container',
  template: `<app-projects-component
    [projects]="project$ | async"
  ></app-projects-component>`,
})
export class ProjectsContainer {
  project$: Observable<Project[]> | undefined;

  constructor(private router: Router, private service: ProjectService) {
    this.project$ = this.service.getProjects();
  }
}
