import { NgModule } from '@angular/core';
import { ProfileRoutingModule } from '.';
import { ProfileContainer } from './container';
import { ProfileComponent } from './container/components';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ProfileContainer, ProfileComponent],
  imports: [ProfileRoutingModule, CommonModule],
  exports: [ProfileRoutingModule, ProfileContainer, ProfileComponent],
})
export class ProfileModule {}
