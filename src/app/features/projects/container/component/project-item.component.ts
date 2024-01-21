import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/models';

@Component({
  selector: 'app-project-item',
  template: `
    <div class="text-white w-96 border shadow-md shadow-white mt-6">
      <div>
        <h1 class="app-justify-center py-4 text-2xl justify-evenly">
          {{ project.name }}
          <a [href]="project.link"
            ><i
              class="fa-solid fa-arrow-up-right-from-square cursor-pointer"
            ></i
          ></a>
        </h1>
      </div>
      <div class="w-96 h-52 p-4">
        <img [src]="project.image" />
      </div>
      <div class="app-justify-center h-14 pb-4 ">
        <button
          (click)="onView()"
          class="bg-warmgray w-40 py-2 rounded-xl hover:scale-110"
        >
          <ng-container *ngIf="!isActive"> Description</ng-container>
          <ng-container *ngIf="isActive">Hide</ng-container>
        </button>
      </div>
      <ng-container *ngIf="isActive"
        ><div class="app-justify-center p-4">
          <p>
            {{ project.description }}
          </p>
        </div></ng-container
      >
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
export class ProjectItemComponent {
  @Input() project!: Project;
  isActive = false;
  constructor(private router: Router) {}
  onView() {
    this.isActive = !this.isActive;
  }
  onNavigation() {
    window.open(this.project.link);
  }
}
