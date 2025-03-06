import { Component } from '@angular/core';

@Component({
  selector: 'app-terminal-container',
  template: ` <div class="py-2">
      <button
        class="border-b-2 border-green-700 text-white font-semibold hover:bg-green-700 p-2 ml-10"
        (click)="onNavigateToNonTechSite()"
      >
        {{
          isTerminal()
            ? 'Not into tech? Head to my main portfolio!'
            : 'Dive into the terminal world!'
        }}
      </button>
    </div>
    <app-terminal></app-terminal>`,
  styles: [``],
})
export class TerminalContainer {
  onNavigateToNonTechSite() {
    if (this.isTerminal()) {
      window.open('/non-tech');
      return;
    }
    window.open('/terminal');
  }

  isTerminal() {
    return location.pathname.includes('terminal');
  }
}
