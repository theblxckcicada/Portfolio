import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-item',
  template: `
    <div class="flex flex-col lg:flex-row w-40 justify-center ">
      <div class="flex flex-col ">
        <div class="rounded-3xl h-28 app-justify-center ">
          <img
            [src]="icon"
            class="w-20 app-justify-center rounded-full py-3 bg-blend-overlay"
          />
        </div>
        <span class="app-justify-center">{{ text }}</span>
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
export class SkillItemComponent {
  @Input() text!: string;
  @Input() icon!: string;
}
