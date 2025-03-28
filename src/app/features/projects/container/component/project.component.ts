import { Component, Input } from '@angular/core';
import { CTF, Project } from 'src/models';

@Component({
  standalone: false,
  selector: 'app-project',
  template: `
    <div
      class="flex justify-center w-full    font-bold flex-col  bg-gray-600 text-white rounded-sm mb-1"
    >
      <p class="p-2 flex justify-center text-2xl lg:text-4xl font-bold ">
        Web Applications
      </p>
      <mat-divider class="bg-white w-full"></mat-divider>
    </div>
    <div class=" w-full pb-2">
      <app-project-item-container
        *ngFor="let project of web_projects"
        [project]="project"
      >
      </app-project-item-container>
    </div>

    <div
      class="flex justify-center w-full font-bold flex-col  bg-gray-600 text-white rounded-sm mb-1"
    >
      <p class="p-2 flex justify-center text-2xl lg:text-4xl font-bold ">
        Capture The Flags (CTF)
      </p>
      <mat-divider class="bg-white w-full"></mat-divider>
    </div>
    <div class=" w-full pb-2">
      <app-project-item-container
        *ngFor="let ctf of ctf_projects"
        [project]="ctf"
      >
      </app-project-item-container>
    </div>
    <div
      class="flex justify-center w-full  font-bold flex-col  bg-gray-600 text-white rounded-sm mb-1"
    >
      <p class="p-2 flex justify-center text-2xl lg:text-4xl font-bold ">
        Hacking Tools
      </p>
      <mat-divider class="bg-white w-full"></mat-divider>
    </div>
    <div class=" w-full pb-2">
      <app-project-item-container
        *ngFor="let project of pentest_projects"
        [project]="project"
        [isVideo]="true"
      >
      </app-project-item-container>
    </div>
  `,
  styles: [``],
})
export class ProjectComponent {
  isActive = false;
  @Input() web_projects: Project[] | undefined | null = [];
  @Input() pentest_projects: Project[] | undefined | null = [];
  @Input() ctf_projects: CTF[] | undefined | null = [];
  onView() {
    this.isActive = !this.isActive;
  }
}
