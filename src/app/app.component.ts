import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button [routerLink]="'direct-import'">Direct Service Import</button>&nbsp;&nbsp;
    <button [routerLink]="'base-component'">Base Component</button>
    <hr/>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-without-di';
}
