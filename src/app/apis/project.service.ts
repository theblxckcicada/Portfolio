import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Project } from 'src/models';
import { Skill } from '../model';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  webProjects: Project[] = [
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
  pentestProjects: Project[] = [
    {
      name: 'Cicada Mastertul',
      description:
        'The tool allows users to authenticate with a target domain using either usernames and passwords or NTLM hashes, and it provides a wide range of enumeration options to gather information about domain users, services, and vulnerabilities. It can also assist with cracking password hashes and extracting sensitive information for further exploitation.',
      link: 'https://github.com/TheBlxckCicada/Cicada-Mastertul',
      image: 'assets/cicada_mastertul.mp4',
      // image: 'assets/cicada_mastertul.png',
    },
  ];

  skills: Skill[] = [
    {
      icon: 'assets/hacker.avif',
      text: 'Network Pentest | Ethical Hacking',
      isCertification: false,
    },
    {
      icon: 'assets/azure-icon.png',
      text: 'Microsoft Azure | Cloud Development',
      isCertification: false,
    },
    {
      icon: 'assets/dotnet-icon.png',
      text: 'C# - Asp.Net Core',
      isCertification: false,
    },
    {
      icon: 'assets/integration.png',
      text: 'Integration - CI/CD | Azure DevOps',
      isCertification: false,
    },
    {
      icon: 'assets/angular.svg',
      text: 'Angular',
      isCertification: false,
    },
    {
      icon: 'assets/cisco-icon.png',
      text: 'Cisco Networking',
      isCertification: false,
    },
    {
      icon: 'assets/typescript.png',
      text: 'Typescript',
      isCertification: false,
    },

    {
      icon: 'assets/pjpt.png',
      text: 'Practical Junior Penetration Tester',
      isCertification: true,
    },
    {
      icon: 'assets/PNPT.png',
      text: 'Practical Network Penetration Tester',
      isCertification: true,
    },
    {
      icon: 'assets/dev-associate.png',
      text: 'Microsoft Azure Developer',
      isCertification: true,
    },
    {
      icon: 'assets/devops.png',
      text: 'Microsoft Azure DevOps Engineer',
      isCertification: true,
    },
  ];

  getPentestProjects() {
    return of(this.pentestProjects);
  }

  getWebProjects() {
    return of(this.webProjects);
  }

  getSkills() {
    return of(this.skills);
  }
}
