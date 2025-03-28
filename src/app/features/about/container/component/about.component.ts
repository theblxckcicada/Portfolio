import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  standalone: false,
  selector: 'app-about',
  template: `
    <div class=" flex flex-col mt-32 lg:mt-56">
      <div class="flex flex-col lg:flex-row ">
        <div class="w-full flex  justify-center">
          <div class="flex-col text-white  app-justify-center">
            <p class="app-justify-center p-2 text-2xl lg:text-4xl ">
              Hi there! 👋
            </p>
            <p class="app-justify-center p-2 text-2xl lg:text-4xl ">
              I'm Dimakatso Sebatane
            </p>
            <span class="flex justify-center"
              >a.k.a.<span class="font-bold mx-1 text-green-500"
                >theblxckcicada</span
              >
              in the shadows</span
            >
            <ul
              class="flex lg:app-justify-center text-lg lg:text-2xl p-2 flex-col lg:flex-row"
            >
              <li class="px-2">Ethical Hacker |</li>
              <li class="px-2">Security Engineer |</li>
              <li class="px-2">Developer |</li>
              <li class="px-2">Software Integration</li>
            </ul>

            <div class="flex justify-center p-2 w-full">
              <a
                routerLink="/u/projects"
                class="shadow-b-sm p-2 w-36 flex justify-center rounded-sm border-b-2 border-white hover:border-b-2 hover:text-green-500 hover:border-green-500 "
                >View Projects</a
              >
            </div>
          </div>
        </div>
        <!-- <div class="w-full flex justify-center lg:justify-start"> -->
        <!-- <img src="assets/ovawatch.png" class="w-96 bg-blend-overlay" /> -->
        <!-- </div> -->
      </div>
    </div>
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
          @apply app-justify-center px-4 text-xl cursor-pointer hover:border-b-2  hover:shadow-sm;
        }

        .nav {
          @apply text-white font-bold h-10 mt-4 app-justify-center flex-wrap;
        }
        .content {
          @apply flex flex-col bg-darkgray text-white font-bold w-full;
        }
        .nav-link {
          @apply px-12 py-2 cursor-pointer app-justify-center hover:bg-warmgray;
        }
        .typing {
          @apply relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter before:bg-basecolor after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-basecolor;
        }
      }
    `,
  ],
})
export class AboutComponent {
  getInstagramUrl() {
    return environment.instagram;
  }

  getGithubUrl() {
    return environment.github;
  }
  getLinkedInUrl() {
    return environment.linkedin;
  }
}
