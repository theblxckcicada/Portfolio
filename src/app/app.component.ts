import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <div class="base-background">
      <div class=" container h-screen flex flex-col ">
        <nav class="flex justify-end justify-items-end py-6 ">
          <ul class="sm:flex-wrap  md:flex lg:flex  ">
            <li class="anchor " routerLinkActive="active">
              <a routerLink="/home" class="h-full w-full  flex justify-center "
                >Home</a
              >
            </li>
            <li class="anchor " routerLinkActive="active">
              <a
                routerLink="/profile"
                class="h-full w-full  flex justify-center "
                >Who Am I</a
              >
            </li>
            <li routerLinkActive="active" class="anchor flex justify-center">
              <a
                routerLink="/projects"
                class="h-full w-full flex justify-center  "
                >Projects</a
              >
            </li>
            <li routerLinkActive="active" class="anchor flex justify-center">
              <a routerLink="/blogs" class="h-full w-full flex justify-center  "
                >Blogs</a
              >
            </li>
          </ul>
        </nav>
        <!-- md:overflow-visible lg:overflow-hidden-->
        <div class=" h-full w-screen overflow-x-hidden">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles: [``],
})
export class AppComponent {
  title = 'PersonalPortfolio';
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      console.log(this.router.isActive('home', false)); // This will log true if the user is on the home page.
    });
  }
}
