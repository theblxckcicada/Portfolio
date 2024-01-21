import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { HomeContainer } from './features/home/container';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'skills',
    loadChildren: () =>
      import('./features/skills/skills.module').then((m) => m.SkillModule),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./features/projects/project.module').then(
        (m) => m.ProjectModule
      ),
  },
  // {
  //   path: 'blogs',
  //   loadChildren: () =>
  //     import('./features/blogs/blogs.module').then((m) => m.BlogsModule),
  // },

  {
    path: '**',
    redirectTo: 'home',
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [],
})
export class AppRoutingModule {}
