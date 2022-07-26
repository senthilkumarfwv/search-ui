import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchUiComponent } from './search-ui.component';

const routes: Routes = [
  { path: "", component: SearchUiComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchUiRoutingModule { }
