import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  template: `
    <div class="grid  md:grid-cols-1 lg:grid-cols-2 ">
      <div class="px-24 flex flex-col justify-center ">
        <div class="flex flex-wrap flex-col">
          <p class="text-white text-3xl font-bold flex-wrap">
            Hello, I'm Dimakatso Sebatane,
          </p>
          <p class="text-white justify-start flex ">
            known in the digital world as <i>"blxck cicada"</i>
          </p>
        </div>
        <div class="w-96 justify-center flex mt-12 flex-col ">
          <p class="text-white justify-center flex pb-6 flex-wrap">
            I'm a versatile professional with a passion for both development and
            penetration testing. With a strong foundation in these fields, I've
            embarked on a journey to explore and secure the digital realm.
          </p>
          <div class="justify-center flex">
            <button class="btn" (click)="navigateToProfile()">Read More</button>
          </div>
        </div>
      </div>
      <div class="flex justify-end justify-items-end ">
        <img
          class="rounded-full  w-96 h-96 flex  shadow-2xl shadow-slate-600  "
          src="assets/my-image.png"
          alt=""
        />
      </div>
    </div>
  `,
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToProfile() {
    this.router.navigate(['profile']);
  }
}
