import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../shared/base-classes/base.component';

@Component({
  selector: 'app-base-component-container',
  template: `
    <div style="display: flex; flex-direction: row">
      <app-child1></app-child1>
      <app-child2></app-child2>
      <app-child3></app-child3>
    </div>
  `,
  styles: ['app-child1, app-child2, app-child3 { width: 200px; height: 100px; background: #6a9cfc; margin-right: 50px; padding: 1rem }']
})
export class BaseComponentContainerComponent extends BaseComponent {
}
