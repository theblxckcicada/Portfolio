import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  standalone: false,
  selector: 'app-home',
  template: `
    <div class="flex flex-col">
      <div class="nav">
        <div class="flex justify-end w-full mr-12">
          <button
            mat-button
            [matMenuTriggerFor]="menu"
            class="md:hidden  cursor-pointer w-12 h-12 flex justify-center"
          >
            <mat-icon class="">menu</mat-icon>
          </button>
          <mat-menu
            #menu="matMenu"
            class="bg-basecolor text-green-500 font-semibold cursor-pointer w-screen"
          >
            <a
              routerLink="/u/home"
              mat-menu-item
              routerLinkActive="active"
              class="nav-link"
              >Home</a
            >
            <a
              routerLink="/u/skills"
              mat-menu-item
              class="nav-link"
              routerLinkActive="active"
              >Skills</a
            >
            <a
              routerLink="/u/projects"
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
        <div
          class="hidden md:flex border-b-2 border-bg-gray-600 bg-gray-600 rounded-md px-8"
        >
          <a routerLink="/u/home" routerLinkActive="active" class="nav-link "
            >Home</a
          >
          <a routerLink="/u/skills" class="nav-link " routerLinkActive="active"
            >Skills</a
          >
          <a
            routerLink="/u/projects"
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

      <div class="mt-14 lg:mt-24 pb-24  justify-center flex ">
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer
      class="font-semibold flex justify-center bottom-0 fixed w-full p-4  cursor-pointer  bg-gray-600 text-white rounded-sm mb-1"
      (click)="navigateToHome()"
    >
      <div class="flex justify-center  ">
        <mat-icon>copyright</mat-icon> The Blxck Cicada
      </div>
      <div class="text-white font-semibold app-justify-center ">
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
          @apply text-green-500 font-bold font-bold border-b-2 hover:font-bold;
        }
        .button {
          @apply app-justify-center px-4 text-xl hover:scale-110 cursor-pointer;
        }

        .nav {
          @apply text-xl text-white font-bold  app-justify-center flex-wrap fixed w-full   h-20;
        }
        .body {
          @apply bg-basecolor app-justify-center;
        }
        .nav-link {
          @apply h-10 px-12 mx-1 py-2 cursor-pointer app-justify-center hover:border-b-2;
        }
      }
    `,
  ],
})
export class HomeComponent {
  title = 'PersonalPortfolio';
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/u']);
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
