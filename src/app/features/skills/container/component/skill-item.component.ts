import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-item',
  template: ` <div class="grid grid-cols-1 w-40 ">
    <div class="rounded-3xl h-20  app-justify-center my-2 ">
      <ng-container *ngIf="!certification">
        <i
          class="{{
            icon
          }} text-5xl w-40  app-justify-center  rounded-full py-3 bg-warmgray"
        ></i>
      </ng-container>
      <ng-container *ngIf="certification">
        <img [src]="icon" class="w-30 app-justify-center rounded-full py-3"/>
      </ng-container>
    </div>
    <span class="app-justify-center">{{ text }}</span>
  </div>`,
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
export class SkillItemComponent {
  @Input() text!: string;
  @Input() icon!: string;
  @Input() certification!: boolean;
}
