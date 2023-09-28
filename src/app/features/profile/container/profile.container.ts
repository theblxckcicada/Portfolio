import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-container',
  template: `<app-profile-component></app-profile-component>`,
})
export class ProfileContainer {
  constructor(private router: Router) {}
}
