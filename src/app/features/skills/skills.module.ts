import { NgModule } from '@angular/core';
import { SkillComponent, SkillItemComponent } from './container/component';
import { SkillContainer, SkillItemContainer } from './container';
import { ApplicationCommonModule } from 'src/app/common';
import { SkillRoutingModule } from './skills-routing.module';
import { CommonModule } from '@angular/common';

const Components = [
  SkillComponent,
  SkillContainer,
  SkillItemComponent,
  SkillItemContainer,
];
@NgModule({
  declarations: [Components],
  imports: [ApplicationCommonModule, SkillRoutingModule, CommonModule],
  exports: [Components, SkillRoutingModule],
})
export class SkillModule {}
