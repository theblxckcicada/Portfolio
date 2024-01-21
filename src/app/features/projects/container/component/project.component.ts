import { Component } from '@angular/core';
import { Project } from 'src/models';

@Component({
  selector: 'app-project',
  template: `
    <div class="my-12 flex flex-wrap justify-evenly pb-4">
      <app-project-item-container
        *ngFor="let project of projects"
        [project]="project"
      >
      </app-project-item-container>
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
  projects: Project[] = [
    {
      name: 'Marvel Explorer',
      link: 'https://marvel.blxckcicada.co.za',
      description: 'This project provides a platform where you can explore a vast collection of Marvel characters and movies. Dive into the Marvel Universe and discover the iconic heroes and thrilling cinematic   adventures that have captivated fans worldwide.',
      image: 'assets/marvel_project.png',
    },
    {
        name: 'Animal Kingdom',
        link: 'https://animals.blxckcicada.co.za',
        description: 'The Animal Kingdom Explorer is a project designed to help you explore and learn about various types of animals, classified as herbivores, carnivores, and omnivores. Immerse yourself in the world of the animal kingdom, discovering their unique characteristics and dietary preferences.',
        image: 'assets/animals_project.png',
      },

  ];
  onView() {
    this.isActive = !this.isActive;
  }
}
