import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-terminal',
  template: `
    <!-- <div class="bg-image z-0"></div>
    <div class="absolute top-0 w-full h-full border-white border-2"> -->
    <div class="flex justify-center w-full ">
      <div class="container mx-auto p-4 h-full flex flex-col">
        <!-- Terminal Header -->
        <div class="bg-gray-900 p-2 rounded-t-lg flex items-center">
          <div class="flex space-x-2">
            <div class="w-3 h-3 bg-red-500 rounded-full"></div>
            <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div class="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div class="text-center flex-grow">
            <span class="text-sm text-green-500"
              >theblxckcicada@ovawatch.co.za: ~</span
            >
          </div>
        </div>
        <div
          class="terminal-scrollbar flex-grow bg-gray-900 p-4 rounded-b-lg overflow-y-auto"
        >
          <!-- Welcome Message -->
          <div>
            <p class="mb-4">
              <span class="text-green-500"
                >theblxckcicada@ovawatch.co.za:~$</span
              >
              <span class="text-white ml-3">cat welcome.txt</span>
            </p>
            <div class="text-white">
              <p class="">
                Hi there! 👋<br />
                I'm <span class="highlight">Dimakatso Sebatane</span>, but in
                the shadows, I go by
                <span class="glitch">theblxckcicada</span>.<br />
                I am a <span class="highlight">Developer</span> |
                <span class="highlight">Software Integration Specialist</span>
                | <span class="highlight">Security Engineer</span>.<br />
                <br />
                By day, I build systems that power the future. By night, I dive
                into the depths of code and networks, uncovering vulnerabilities
                and fortifying digital fortresses.<br />
                <br />
                My mission? To bridge the gap between innovation and security,
                one line of code at a time.<br />
                <br />
                Welcome to my domain. Let's make the digital world a safer
                place. 🖥️🔒
              </p>
            </div>
          </div>

          <!-- New terminal line-->
          <div class="mt-1">
            <p class="mb-4 flex">
              <span class="text-green-500"
                >theblxckcicada@ovawatch.co.za:~$</span
              ><span class="blinking-cursor"></span>
            </p>
          </div>
        </div>
      </div>
      <!-- </div>
    </div> -->
    </div>
  `,
  styles: [
    `
      @tailwind base;
      @tailwind components;
      @tailwind utilities;

      @layer base {
        /* Intro Section */
        .intro {
          @apply m-10 p-5 border-2 border-green-500 rounded-md;
        }

        .intro h2 {
          @apply text-2xl text-green-500 mb-5;
        }

        .intro p {
          @apply text-[1.1rem] leading-[1.8] text-green-500 opacity-90;
        }

        .highlight {
          @apply text-green-500 font-bold;
        }

        .glitch {
          @apply relative text-green-500;
        }

        .glitch::before {
          content: attr(data-text);
          @apply absolute top-0 left-[2px] w-full h-full;
          text-shadow: -2px 0 #ff00ff;
          animation: glitch-anim 2s infinite linear alternate-reverse;
        }

        .glitch::after {
          content: attr(data-text);
          @apply absolute top-0 left-[-2px] w-full h-full;
          text-shadow: 2px 0 #00ffff;
          animation: glitch-anim 1s infinite linear alternate-reverse;
        }
        .blinking-cursor {
          display: inline-block;
          width: 4px;
          height: 20px;
          background-color: #00ff00;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }
      }
    `,
  ],
})
export class TerminalComponent {
  title = 'PersonalPortfolio';
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/']);
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
