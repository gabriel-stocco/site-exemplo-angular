import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiRickAndMortyComponent } from './api-rick-and-morty/api-rick-and-morty.component';



const routes: Routes = [
  {path:"api-rick&morty", component: ApiRickAndMortyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
