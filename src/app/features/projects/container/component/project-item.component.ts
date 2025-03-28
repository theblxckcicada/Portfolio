import {
  Component,
  ElementRef,
  inject,
  Input,
  Sanitizer,
  ViewChild,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Project } from 'src/models';

@Component({
  standalone: false,
  selector: 'app-project-item',
  template: `
    <div class="">
      <div class="text-white font-bold w-full border shadow-md shadow-white">
        <div class="w-full lg:w-4/5 ">
          <div class="w-full p-4 flex   flex-col lg:flex-row justify-center">
            <div class="w-full flex justify-center">
              <div
                class="w-[20rem] h-[15rem] lg:w-[30rem] lg:h-[25rem] flex justify-center "
              >
                <ng-container *ngIf="!isVideo"
                  ><img
                    [src]="project.image"
                    class="w-full h-full flex justify-center"
                /></ng-container>
                <ng-container *ngIf="isVideo">
                  <video
                    [src]="project.image"
                    #videoPlayer
                    controls
                    disablePictureInPicture
                  ></video>
                </ng-container>
              </div>
            </div>

            <div class="w-full lg:w-[40rem]  flex ml-0 lg:ml-8">
              <div class="px-2 py-4 w-full mt-2 lg:mt-20">
                <h1
                  class="flex justify-center border-b w-full pb-1 font-bold text-2xl text-green-500"
                >
                  {{ project.name }}
                </h1>

                <p class="pt-2">{{ project.description }}</p>
                <div class="flex justify-center mt-2">
                  <a
                    class="cursor-pointer border-b flex justify-center border-green-500 w-32 hover:border-white hover:text-green-500"
                    [href]="project.link"
                    [target]="project.link"
                    ><span class=""
                      ><span>View</span
                      ><i
                        class="mx-1 fa-solid fa-arrow-up-right-from-square cursor-pointer"
                      ></i></span
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <mat-divider class="mt-2"></mat-divider>
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
      }
    `,
  ],
})
export class ProjectItemComponent {
  @Input() project!: Project;
  isActive = false;
  @Input() isVideo!: boolean;
  sanitizer = inject(DomSanitizer);
  @ViewChild('videoPlayer', { static: false }) videoplayer:
    | ElementRef
    | undefined;

  ngAfterViewInit() {
    this.videoplayer?.nativeElement.play();
  }
  onView() {
    this.isActive = !this.isActive;
  }

  sanitizeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.project.link);
  }
}
