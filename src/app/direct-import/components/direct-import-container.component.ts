import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct-import-container',
  template: `
<div style="display: flex; flex-direction: row">
  <app-direct-import></app-direct-import>
  <app-direct-import></app-direct-import>
  <app-direct-import></app-direct-import>
</div>
  `,
  styles: ['app-direct-import { width: 200px; height: 100px; background: lightgray; margin-right: 50px; padding: 1rem }']
})
export class DirectImportContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
