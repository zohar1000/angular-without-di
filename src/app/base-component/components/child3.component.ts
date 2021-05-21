import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../shared/base-classes/base.component';

@Component({
  selector: 'app-child3',
  template: `
    <div>
      <div>Child3 Component</div><br/>
      <div>Logging Service ID: {{loggingService.id}}</div>
      <div>Error Service ID: {{errorService.id}}</div>
    </div>
  `
})
export class Child3Component extends BaseComponent {
}
