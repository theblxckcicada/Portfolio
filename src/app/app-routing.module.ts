import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { HomeContainer } from './features/home/container';

const routes: Routes = [
  {
    path: 'non-tech',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },

  {
    path: 'terminal',
    loadChildren: () =>
      import('./features/terminal/terminal.module').then(
        (m) => m.TerminalModule
      ),
  },

  {
    path: '**',
    redirectTo: 'terminal',
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [],
})
export class AppRoutingModule {}
