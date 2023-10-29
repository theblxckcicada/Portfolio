import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/apis/project.service';
import { Project } from 'src/models';

@Component({
  selector: 'app-profile-container',
  template: `<app-profile-component

  ></app-profile-component>`,
})
export class ProfileContainer {

}
