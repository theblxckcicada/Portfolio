import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/models';

@Component({
  selector: 'app-projects-component',
  template: `
    <!-- <div class=" flex flex-row overflow-y-scroll overflow-visible">
      <div class=" flex flex-col basis-1/2 ">
        <div class="flex flex-wrap justify-center py-52">
          <p class="text-white text-3xl font-bold flex-wrap">
            My Recent Projects
          </p>
        </div>
      </div>
      <div class=" basis-1/2">
        <div class="flex flex-col  ">
          <app-projects-card-component
            *ngFor="let card of count"
          ></app-projects-card-component>
        </div>
      </div>
    </div> -->
    <div class="flex flex-col pb-40">
      <div class="justify-center flex">
        <h1 class="text-white text-3xl">My Recent Projects</h1>
      </div>
      <div class="grid md:grid-cols-1 lg:grid-cols-2 ">
        <app-projects-card-component
          *ngFor="let card of projects"
          [project]="card"
        ></app-projects-card-component>
      </div>
    </div>
  `,
  styles: [``],
})
export class ProjectsComponent {
  @Input() projects: Project[] | null = [];
  constructor(private router: Router) {}

  navigateToProfile() {
    this.router.navigate(['profile']);
  }
}
