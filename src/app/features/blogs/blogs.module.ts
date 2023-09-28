import { NgModule } from '@angular/core';
import { BlogsRoutingModule } from '.';
import { BlogsContainer } from './container';
import { BlogsComponent } from './container/components';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BlogsContainer, BlogsComponent],
  imports: [BlogsRoutingModule, CommonModule],
  exports: [BlogsRoutingModule, BlogsContainer, BlogsComponent],
})
export class BlogsModule {}
