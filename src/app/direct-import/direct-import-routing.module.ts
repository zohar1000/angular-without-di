import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectImportContainerComponent } from './components/direct-import-container.component';

const routes: Routes = [
  { path: '', component: DirectImportContainerComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectImportRoutingModule { }
