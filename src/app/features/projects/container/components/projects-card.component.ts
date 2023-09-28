import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-card-component',
  template: ` <div class="pt-12 ">
    <div class="pro-card">
      <div class="py-6 md:flex lg:flex">
        <div class="basis-2/4 w-3/4 p-4  h-fit  ">
          <img
            class="bg-blend-color-multiply"
            src="assets/projects-image.webp"
            alt=""
          />
        </div>
        <div class="text-white  basis-3/4">
          <p class="text-xl">Project Name</p>
          <p class="text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            rem incidunt architecto quibusdam sapiente perferendis, optio
            corporis eius doloribus odio, blanditiis rerum mollitia dolorum
            laudantium, excepturi itaque magni omnis. Omnis.
          </p>
        </div>
      </div>
    </div>
  </div>`,
})
export class ProjectsCardComponent {}
