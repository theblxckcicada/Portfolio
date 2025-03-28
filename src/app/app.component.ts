import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  standalone: false,
  selector: 'app-root',
  template: `
    <div class=" h-screen  w-full z-0">
      <div class="bg-image z-0 h-screen w-full"></div>
      <div
        class="absolute top-0  border-white border-2 w-full overflow-auto h-full "
      >
        <router-outlet></router-outlet>
      </div>
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
export class AppComponent {
  title = 'PersonalPortfolio';

  constructor(private router: Router) {}
}
