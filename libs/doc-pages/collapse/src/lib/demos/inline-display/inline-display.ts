import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'inline-display-demo',
  templateUrl: './inline-display.html',
  standalone: false
})
export class InlineDisplayDemoComponent {
  isCollapsed = false;
}
