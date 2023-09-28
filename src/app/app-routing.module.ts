import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeContainer } from './features/home/container';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./features/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./features/projects/projects.module').then(
        (m) => m.ProjectsModule
      ),
  },
  {
    path: 'blogs',
    loadChildren: () =>
      import('./features/blogs/blogs.module').then((m) => m.BlogsModule),
  },
  { path: '', component: HomeContainer },
  {
    path: '**',
    redirectTo: '',
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [],
})
export class AppRoutingModule {}
