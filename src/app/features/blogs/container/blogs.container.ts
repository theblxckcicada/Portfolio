import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs-container',
  template: `<app-blogs-component></app-blogs-component>`,
})
export class BlogsContainer {
  ngOnInit() {
    window.open('https://blog.blxckcicada.co.za');
  }
}
