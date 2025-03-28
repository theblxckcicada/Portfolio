import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/apis/project.service';
import { Skill } from 'src/app/model';

@Component({
  standalone: false,
  selector: 'app-skill-container',
  template: `<app-skill [skills]="skill$ | async"></app-skill>`,
  styles: [``],
})
export class SkillContainer {
  projectService = inject(ProjectService);
  skill$: Observable<Skill[]> = this.projectService.getSkills();
}
