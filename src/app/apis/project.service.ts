import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Project } from 'src/models';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  projects: Project[] = [
    {
      name: 'Marvel',
      description:
        'This project provides a platform where you can explore a vast collection of Marvel characters and movies. Dive into the Marvel Universe and discover the iconic heroes and thrilling cinematic adventures that have captivated fans worldwide.',
      link: 'https://marvel.blxckcicada.co.za',
      image: 'assets/marvel_project.png',
    },
  ];

  getProjects() {
    return of(this.projects);
  }
}
