import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container h-screen flex flex-col ">
      <nav class="flex justify-end justify-items-end py-6 ">
        <div class="sm:flex-wrap  md:flex lg:flex  ">
          <a class="anchor" routerLink="home">Home</a>
          <a class="anchor" routerLink="profile">Who Am I</a>
          <a class="anchor" routerLink="projects">Projects</a>
          <a class="anchor" (click)="redirectToBlog()">Blogs</a>
        </div>
      </nav>
      <div class=" h-full w-screen md:overflow-visible lg:overflow-hidden">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [``],
})
export class AppComponent {
  title = 'PersonalPortfolio';

  redirectToBlog() {
    window.open('https://blog.blxckcicada.co.za');
  }
}
