import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeContainer } from './container';

const routes: Route[] = [
  {
    path: '',
    component: HomeContainer,
    children: [
      {
        path: 'skills',
        loadChildren: () =>
          import('../../features/skills/skills.module').then(
            (m) => m.SkillModule
          ),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('../../features/projects/project.module').then(
            (m) => m.ProjectModule
          ),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../../features/about/about.module').then(
            (m) => m.AboutModule
          ),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
