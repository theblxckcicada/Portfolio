import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeModule } from './features/home';
import { AppRoutingModule } from './app-routing.module';
import { ProfileModule } from './features/profile';
import { ProjectsModule } from './features/projects';
import { BlogsModule } from './features/blogs';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ProfileModule,
    ProjectsModule,
    BlogsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
