import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/model';

@Component({
  selector: 'app-skill',
  template: `
    <div
      class="flex flex-around flex-col py-12 w-screen h-screen overflow-auto"
    >
      <div class=" text-white py-12 ">
        <div class="app-justify-center  text-2xl p-4 ">
          <h1>Employability Skills</h1>
        </div>
        <mat-divider class="bg-white"></mat-divider>
        <div class="flex flex-wrap justify-evenly">
          <app-skill-item-container
            *ngFor="let skill of getSkills()"
            [text]="skill.text"
            [icon]="skill.icon"
          ></app-skill-item-container>
        </div>
      </div>
      <div class=" text-white py-12 ">
        <div class="app-justify-center text-2xl p-4 ">
          <h1>Certification</h1>
        </div>
        <mat-divider class="bg-white"></mat-divider>
        <div class="flex flex-wrap justify-evenly">
          <app-skill-item-container
            *ngFor="let skill of getCertification()"
            [text]="skill.text"
            [icon]="skill.icon"
          ></app-skill-item-container>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .app-justify-center {
        @apply flex justify-center;
      }
    `,
  ],
})
export class SkillComponent {
  @Input() skills: Skill[] | undefined | null = [];

  getCertification() {
    return this.skills?.filter((x) => x.isCertification);
  }
  getSkills() {
    return this.skills?.filter((x) => !x.isCertification);
  }
}
