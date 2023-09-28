import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-component',
  template: `
  <div class="bg-darkgray">

  </div>
  `,
})
export class ProjectsComponent {
  constructor(private router: Router) {}

  navigateToProfile() {
    this.router.navigate(['profile']);
  }
}
