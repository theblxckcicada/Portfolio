import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  template: `
    <div class="w-screen  h-screen ">
      <div class="flex flex-col w-screen h-screen">
        <div class="nav">
          <div class="flex justify-end w-full">
            <button
              mat-button
              [matMenuTriggerFor]="menu"
              class="md:hidden block cursor-pointer"
            >
              <mat-icon class="text-4xl">menu</mat-icon>
            </button>
            <mat-menu
              #menu="matMenu"
              class="bg-basecolor text-white cursor-pointer"
            >
              <a
                routerLink="/non-tech/home"
                mat-menu-item
                routerLinkActive="active"
                class="nav-link"
                >Home</a
              >
              <a
                routerLink="/non-tech/skills"
                mat-menu-item
                class="nav-link"
                routerLinkActive="active"
                >Skills</a
              >
              <a
                routerLink="/non-tech/projects"
                mat-menu-item
                class="nav-link"
                routerLinkActive="active"
                >Projects</a
              >
              <a
                routerLink="/terminal"
                target="/terminal"
                mat-menu-item
                class="nav-link"
                routerLinkActive="active"
                >Terminal</a
              >
              <a
                [href]="getBlogUrl()"
                [target]="getBlogUrl()"
                mat-menu-item
                class="nav-link"
                routerLinkActive="active"
                >Blogs</a
              >
            </mat-menu>
          </div>
          <div class="hidden md:flex">
            <a
              routerLink="/non-tech/home"
              routerLinkActive="active"
              class="nav-link "
              >Home</a
            >
            <a
              routerLink="/non-tech/skills"
              class="nav-link "
              routerLinkActive="active"
              >Skills</a
            >
            <a
              routerLink="/non-tech/projects"
              class="nav-link "
              routerLinkActive="active"
              >Projects</a
            >
            <a
              routerLink="/terminal"
              target="/terminal"
              class="nav-link "
              routerLinkActive="active"
              >Terminal</a
            >
            <a
              [href]="getBlogUrl()"
              [target]="getBlogUrl()"
              class="nav-link "
              routerLinkActive="active"
              >Blogs</a
            >
          </div>
        </div>

        <div class="p-12 w-screen h-screen justify-center flex">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
    <footer
      class="text-white flex justify-center bottom-0 fixed w-screen p-4  cursor-pointer"
      (click)="navigateToHome()"
    >
      <div class="flex justify-center">
        <mat-icon>copyright</mat-icon> The Blxck Cicada
      </div>
      <div class="text-white app-justify-center">
        <a class="button" [href]="getYoutubeUrl()" [target]="getYoutubeUrl()">
          <i class="fa-brands fa-youtube" aria-hidden="true"></i>
        </a>
        <a
          class="button"
          [href]="getInstagramUrl()"
          [target]="getInstagramUrl()"
        >
          <i class="fa-brands fa-instagram" aria-hidden="true"></i>
        </a>
        <a class="button" [href]="getLinkedInUrl()" [target]="getLinkedInUrl()">
          <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
        </a>
        <a class="button" [href]="getGithubUrl()" [target]="getGithubUrl()">
          <i class="fa-brands fa-github" aria-hidden="true"></i>
        </a>
      </div>
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
          @apply text-white font-bold border-b-2 hover:font-bold;
        }
        .button {
          @apply app-justify-center px-4 text-xl hover:scale-110 cursor-pointer;
        }

        .nav {
          @apply text-white  app-justify-center flex-wrap fixed w-full   h-24 px-12;
        }
        .body {
          @apply bg-basecolor h-screen app-justify-center;
        }
        .nav-link {
          @apply h-10 px-12 py-2 cursor-pointer app-justify-center hover:border-b-2;
        }
      }
    `,
  ],
})
export class HomeComponent {
  title = 'PersonalPortfolio';
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/non-tech']);
  }
  ngOnInit() {
    this.router.events.subscribe((event) => {});
  }
  getInstagramUrl() {
    return environment.instagram;
  }

  getGithubUrl() {
    return environment.github;
  }
  getLinkedInUrl() {
    return environment.linkedin;
  }
  getYoutubeUrl() {
    return environment.youtube;
  }
  getBlogUrl() {
    return environment.blog;
  }
}
