import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseComponentRoutingModule } from './base-component-routing.module';
import { BaseComponentContainerComponent } from './components/base-component-container.component';
import { Child1Component } from './components/child1.component';
import { Child2Component } from './components/child2.component';
import { Child3Component } from './components/child3.component';


@NgModule({
  declarations: [
    Child1Component,
    Child2Component,
    Child3Component,
    BaseComponentContainerComponent
  ],
  imports: [
    CommonModule,
    BaseComponentRoutingModule
  ]
})
export class BaseComponentModule { }
