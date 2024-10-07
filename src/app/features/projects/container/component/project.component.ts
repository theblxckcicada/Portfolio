import { Component, Input } from '@angular/core';
import { Project } from 'src/models';

@Component({
  selector: 'app-project',
  template: `
    <div class="h-screen w-screen overflow-auto pt-32 ">
      <div class="flex justify-center w-full text-white flex-col">
        <p class="p-2 flex justify-center text-4xl">Web Applications</p>
        <mat-divider class="bg-white w-full"></mat-divider>
      </div>
      <div class="my-12 flex flex-wrap justify-evenly pb-4 ">
        <app-project-item-container
          *ngFor="let project of web_projects"
          [project]="project"
        >
        </app-project-item-container>
      </div>

      <div class="flex justify-center w-full text-white flex-col">
        <p class="p-2 flex justify-center text-4xl">Pentest Tools</p>
        <mat-divider class="bg-white w-full"></mat-divider>
      </div>
      <div class="my-12 flex flex-wrap justify-evenly pb-4 ">
        <app-project-item-container
          *ngFor="let project of pentest_projects"
          [project]="project"
          [isVideo]="true"
        >
        </app-project-item-container>
      </div>
    </div>
  `,
  styles: [``],
})
export class ProjectComponent {
  isActive = false;
  @Input() web_projects: Project[] | undefined | null = [];
  @Input() pentest_projects: Project[] | undefined | null = [];
  onView() {
    this.isActive = !this.isActive;
  }
}
