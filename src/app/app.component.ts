import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <div class="w-screen body ">
      <div class="flex flex-col w-full container">
        <div class="nav">
          <div class="flex justify-end w-full pr-14">
            <button
              mat-button
              [matMenuTriggerFor]="menu"
              class="md:hidden block cursor-pointer"
            >
              <mat-icon class="text-4xl">menu</mat-icon>
            </button>
            <mat-menu #menu="matMenu" class="bg-basecolor text-white cursor-pointer">
              <a
                routerLink="/home"
                mat-menu-item
                routerLinkActive="active"
                class="nav-link"
                >Home</a
              >
              <a
                routerLink="/skills"
                mat-menu-item
                class="nav-link"
                routerLinkActive="active"
                >Skills</a
              >
              <a
                routerLink="/projects"
                mat-menu-item
                class="nav-link"
                routerLinkActive="active"
                >Projects</a
              >
              <a
                href="https://blog.blxckcicada.co.za"
                mat-menu-item
                class="nav-link"
                routerLinkActive="active"
                >Blogs</a
              >
            </mat-menu>
          </div>
          <div class="hidden md:flex">
            <a
              routerLink="/home"
              routerLinkActive="active"
              class="nav-link "
              >Home</a
            >
            <a
              routerLink="/skills"
              class="nav-link "
              routerLinkActive="active"
              >Skills</a
            >
            <a
              routerLink="/projects"
              class="nav-link "
              routerLinkActive="active"
              >Projects</a
            >
            <a
              href="https://blog.blxckcicada.co.za"
              class="nav-link "
              routerLinkActive="active"
              >Blogs</a
            >
          </div>
        </div>

        <div class="container overflow-auto">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
    <footer
      class="text-white flex justify-center bottom-0 fixed w-screen p-4 bg-warmgray cursor-pointer"
      (click)="navigateToHome()"
    >
      <mat-icon>copyright</mat-icon> The Blxck Cicada
    </footer>
  `,
  styles: [
    `
      @tailwind base;
      @tailwind components;
      @tailwind utilities;

      @layer base {
        .app-justify-center {
          @apply flex justify-center;
        }
        .active {
          @apply bg-white  text-black font-bold hover:bg-white hover:text-black hover:font-bold;
        }
        .button {
          @apply app-justify-center px-4 text-xl hover:scale-110 cursor-pointer;
        }

        .nav {
          @apply text-white h-10 mt-4 app-justify-center flex-wrap;
        }
        .body {
          @apply bg-basecolor h-screen app-justify-center;
        }
        .nav-link {
          @apply px-12 py-2 cursor-pointer app-justify-center  hover:bg-white hover:text-black;
        }
      }
    `,
  ],
})
export class AppComponent {
  title = 'PersonalPortfolio';
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/']);
  }
  ngOnInit() {
    this.router.events.subscribe((event) => {});
  }
}
