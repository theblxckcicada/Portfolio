import { Component, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-skill-item-container',
  template: `<app-skill-item
    [icon]="icon"
    [text]="text"
    [link]="link"
  ></app-skill-item>`,
  styles: [``],
})
export class SkillItemContainer {
  @Input() text!: string;
  @Input() icon!: string;
  @Input() link: string | undefined;
}
