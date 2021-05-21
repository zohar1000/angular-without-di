import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectImportRoutingModule } from './direct-import-routing.module';
import { DirectImportComponent } from './components/direct-import.component';
import { DirectImportContainerComponent } from './components/direct-import-container.component';


@NgModule({
  declarations: [
    DirectImportComponent,
    DirectImportContainerComponent
  ],
  imports: [
    CommonModule,
    DirectImportRoutingModule
  ]
})
export class DirectImportModule { }
