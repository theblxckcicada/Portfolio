import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/models';

@Component({
  selector: 'app-profile-component',
  template: `
    <div class="grid  md:grid-cols-1 lg:grid-cols-2 ">
      <div class=" px-24 py-12 flex flex-col justify-center">
        <img
          class="rounded-full  w-96 h-96 flex  shadow-2xl shadow-slate-600  "
          src="assets/my-pic-reversed.png"
          alt=""
        />
      </div>
      <div class="justify-center flex-col flex px-40 ">
        <div class="flex flex-wrap flex-col">
          <p class="text-white text-3xl font-bold flex-wrap">
            Dimakatso Sebatane,
          </p>
        </div>
        <div class="w-96 justify-center flex mt-8 flex-col overflow-x">
          <p class="text-white justify-center flex pb-6 flex-wrap">
            I am a passionate web developer with expertise in Angular, ASP.NET
            Core, and cutting-edge technologies. My journey in web development
            has been driven by a deep passion for crafting dynamic and
            user-friendly web applications.
          </p>
          <p class="text-white justify-center flex pb-6 flex-wrap">
            Beyond web development, I excel in the realm of cloud computing,
            utilizing Azure DevOps and Azure Cloud Services to streamline
            development and deployment processes. I have leveraged Azure Logic
            Apps and Functions to create efficient workflows and automation
            solutions.
          </p>
          <p class="text-white justify-center flex pb-6 flex-wrap">
            In addition to my development skills, I take on the role of a
            penetration tester, meticulously probing systems for vulnerabilities
            and ensuring their security against potential threats. My knowledge
            of computer networking enhances my understanding of system
            interactions in the digital landscape.
          </p>
        </div>
      </div>
    </div>
  `,
})
export class ProfileComponent {

  constructor(private router: Router) {}

  navigateToProfile() {
    this.router.navigate(['profile']);
  }
}
