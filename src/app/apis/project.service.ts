import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Project } from 'src/models';
import { Skill } from '../model';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  projects: Project[] = [
    {
      name: 'Marvel  Explorer',
      description:
        'This project provides a platform where you can explore a vast collection of Marvel characters and movies. Dive into the Marvel Universe and discover the iconic heroes and thrilling cinematic adventures that have captivated fans worldwide.',
      link: 'https://victorious-coast-002571910.5.azurestaticapps.net',
      image: 'assets/marvel_project.png',
    },
    {
      name: 'Animal Kingdom',
      description:
        'The Animal Kingdom Explorer is a project designed to help you explore and learn about various types of animals, classified as herbivores, carnivores, and omnivores. Immerse yourself in the world of the animal kingdom, discovering their unique characteristics and dietary preferences.',
      link: 'https://greeable-smoke-0732c9910.5.azurestaticapps.net',
      image: 'assets/animals_project.png',
    },
  ];

  skills: Skill[] = [
    {
      icon: 'assets/anonymous.jpg',
      text: 'Penetration Testing',
      isCertification: false,
    },
    {
      icon: 'assets/azure-icon.png',
      text: 'Cloud Development',
      isCertification: false,
    },
    {
      icon: 'assets/dotnet-icon.png',
      text: 'C# - Asp.Net Core',
      isCertification: false,
    },
    {
      icon: 'assets/integration.png',
      text: 'Integration - CI/CD',
      isCertification: false,
    },
    {
      icon: 'assets/angular.svg',
      text: 'Angular',
      isCertification: false,
    },
    {
      icon: 'assets/cisco-icon.png',
      text: 'Computer Networking',
      isCertification: false,
    },
    {
      icon: 'assets/typescript.png',
      text: 'Typescript',
      isCertification: false,
    },

    {
      icon: 'assets/pjpt.png',
      text: 'TCM - PJPT',
      isCertification: true,
    },
    {
      icon: 'assets/PNPT.png',
      text: 'TCM - PNPT',
      isCertification: true,
    },
    {
      icon: 'assets/dev-associate.png',
      text: 'Microsoft - AZ-204',
      isCertification: true,
    },
    {
      icon: 'assets/devops.png',
      text: 'Microsoft - AZ-400',
      isCertification: true,
    },
  ];

  getProjects() {
    return of(this.projects);
  }

  getSkills() {
    return of(this.skills);
  }
}
