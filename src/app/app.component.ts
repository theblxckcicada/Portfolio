import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <div class="container"><h1>Portfolio coming soon</h1></div> `,
  styles: [
    `
      .container {
        align-items: 'center';
        justify-content: 'center';
    
        background:#818382;
      }
    `,
  ],
})
export class AppComponent {
  title = 'PersonalPortfolio';
}
