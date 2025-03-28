import { Component, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-skill-item',
  template: `
    <div class="flex flex-col lg:flex-row w-96 justify-center group">
      <div class="flex flex-col ">
        <div class="rounded-3xl h-28 app-justify-center ">
          <img
            [src]="icon"
            class="w-20 app-justify-center rounded-full py-3 bg-blend-overlay"
          />
        </div>
        <div class="app-justify-center flex-wrap">
          <span class="app-justify-center ">
            {{ text }}
            <a
              *ngIf="link"
              [href]="link"
              [target]="link"
              class="ml-1 hidden group-hover:inline text-gray-600 font-bold hover:border-b hover:text-green-500"
            >
              | verify</a
            >
          </span>
        </div>
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
  @Input() link: string | undefined;
}
