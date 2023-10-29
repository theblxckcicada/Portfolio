import { Component, Input } from '@angular/core';
import { Project } from 'src/models';
@Component({
  selector: 'app-projects-card-component',
  template: ` <div class="pt-12 ">
    <div class="pro-card" (click)="visit()">
      <div class="py-6 md:flex lg:flex">
        <div class="basis-2/4 w-3/4 p-4  h-fit  ">
          <img class="bg-blend-color-multiply" [src]="project.image" alt="" />
        </div>
        <div class="text-white  basis-3/4">
          <p class="text-xl">{{ project.name }}</p>
          <p class="text-base">
            {{ project.description }}
          </p>
        </div>
      </div>
    </div>
  </div>`,
})
export class ProjectsCardComponent {
  @Input() project!: Project;

  visit() {
    window.open(this.project.link);
  }
}
