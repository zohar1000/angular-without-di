import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'direct-import', loadChildren: () => import('./direct-import/direct-import.module').then(m => m.DirectImportModule) },
  { path: 'base-component', loadChildren: () => import('./base-component/base-component.module').then(m => m.BaseComponentModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
