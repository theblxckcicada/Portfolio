import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-item-container',
  template: `<app-skill-item [icon]="icon" [text]="text"></app-skill-item>`,
  styles: [``],
})
export class SkillItemContainer {
  @Input() text!: string;
  @Input() icon!: string;
}
