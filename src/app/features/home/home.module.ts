import { NgModule } from '@angular/core';
import { HomeRoutingModule } from '.';
import { HomeContainer } from './container';
import { HomeComponent } from './container/components';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeContainer, HomeComponent],
  imports: [HomeRoutingModule, CommonModule],
  exports: [HomeRoutingModule, HomeContainer, HomeComponent],
})
export class HomeModule {}
