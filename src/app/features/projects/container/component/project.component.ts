import { Component, Input } from '@angular/core';
import { Project } from 'src/models';

@Component({
  selector: 'app-project',
  template: `
    <div class="h-screen w-screen overflow-auto">
      <div class="my-12 flex flex-wrap justify-evenly pb-4 ">
        <app-project-item-container
          *ngFor="let project of projects"
          [project]="project"
        >
        </app-project-item-container>
      </div>
    </div>
  `,
  styles: [
    `
      @tailwind base;
      @tailwind components;
      @tailwind utilities;

      @layer base {
        .app-justify-center {
          @apply flex justify-center;
        }
      }
    `,
  ],
})
export class ProjectComponent {
  isActive = false;
  @Input() projects: Project[] | undefined | null = [];
  onView() {
    this.isActive = !this.isActive;
  }
}
