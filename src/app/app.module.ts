import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationCommonModule } from './common';
import { HomeModule } from './features/home';
import { SkillModule } from './features/skills';
import { ProjectModule } from './features/projects';
import { TerminalModule } from './features/terminal';
import { AboutModule } from './features/about';

const AppModules = [HomeModule, SkillModule, ProjectModule, AboutModule];
const TerminalModules = [TerminalModule];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ApplicationCommonModule,
    AppModules,
    TerminalModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
