import { Component } from '@angular/core';
import { Skill } from 'src/app/model';

@Component({
  selector: 'app-skill',
  template: `
    <div class="container text-white">
      <div class="app-justify-center py-12 text-2xl">
        <h1>Employability Skills</h1>
      </div>
      <mat-divider></mat-divider>
      <div class="flex flex-wrap justify-evenly">
        <app-skill-item-container
          *ngFor="let skill of skills"
          [text]="skill.text"
          [icon]="skill.icon"
          [certification]="skill.certification"
        ></app-skill-item-container>
      </div>
    </div>
    <div class="container text-white overflow-auto pb-24">
      <div class="app-justify-center py-12 text-2xl">
        <h1>Certification</h1>
      </div>
      <mat-divider></mat-divider>
      <div class="flex flex-wrap justify-evenly">
        <app-skill-item-container
          *ngFor="let skill of certifications"
          [text]="skill.text"
          [icon]="skill.icon"
          [certification]="skill.certification"
        ></app-skill-item-container>
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
export class SkillComponent {
  skills: Skill[] = [
    {
      icon: 'assets/anonymous.jpg',
      text: 'Penetration Testing',
      certification: true,
    },
    {
      icon: 'assets/azure-icon.png',
      text: 'Cloud Development',
      certification: true,
    },
    {
      icon: 'assets/dotnet-icon.png',
      text: 'C# - Asp.Net Core',
      certification: true,
    },
    {
      icon: 'assets/integration.png',
      text: 'Integration - CI/CD',
      certification: true,
    },
    {
      icon: 'assets/angular.svg',
      text: 'Angular',
      certification: true,
    },
    {
      icon: 'assets/cisco-icon.png',
      text: 'Computer Networking',
      certification: true,
    },
    {
      icon: 'assets/typescript.png',
      text: 'Typescript',
      certification: true,
    },
  ];
  certifications: Skill[] = [
    {
      icon: 'assets/pjpt.png',
      text: 'TCM - PJPT',
      certification: true,
    },
    {
      icon: 'assets/devops.png',
      text: 'Microsoft - AZ-400',
      certification: true,
    },
    {
      icon: 'assets/dev-associate.png',
      text: 'Microsoft - AZ-204',
      certification: true,
    },
  ];
}
