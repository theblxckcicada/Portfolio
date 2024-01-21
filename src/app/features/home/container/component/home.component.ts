import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <!-- <div class="body grid grid-cols-1"> -->
      <div class="container flex flex-col mt-32">

        <div class="flex-wrap app-justify-center">
          <div class="flex flex-col text-white app-justify-center">
            <h1 class="app-justify-center p-2 text-regular md:text-4xl ">Hi 👋</h1>
            <h1 class="app-justify-center p-2 text-regular md:text-4xl typing">
              I'm Dimakatso Sebatane
            </h1>
            <h1 class="app-justify-center p-2 ">
              Cloud Developer | Security Engineer
            </h1>
            <div class="text-white app-justify-center">
              <a
                class="button"
                href="https://www.facebook.com/profile.php?id=100072331939880"
              >
                <i class="fa-brands fa-facebook" aria-hidden="true"></i>
              </a>
              <a
                class="button"
                href="https://www.linkedin.com/in/bafedile-s-9a474a1a9"
              >
                <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
              </a>
              <a class="button" href="https://github.com/TheBlxckcicada">
                <i class="fa-brands fa-github" aria-hidden="true"></i>
              </a>
            </div>
          </div>
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
          @apply app-justify-center px-4 text-xl hover:scale-110 cursor-pointer;
        }

        .nav {
          @apply text-white h-10 mt-4 app-justify-center flex-wrap;
        }
        .content {
          @apply flex flex-col bg-darkgray text-white w-full;
        }
        .nav-link {
          @apply px-12 py-2 cursor-pointer app-justify-center hover:bg-warmgray hover:scale-110;
        }
        .typing {
          @apply relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter before:bg-basecolor after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-basecolor;
        }
      }
    `,
  ],
})
export class HomeComponent {}
