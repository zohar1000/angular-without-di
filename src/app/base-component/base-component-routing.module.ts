import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponentContainerComponent } from './components/base-component-container.component';

const routes: Routes = [
  { path: '', component: BaseComponentContainerComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseComponentRoutingModule { }
