import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardListComponent } from './api-rick-and-morty/components/card-list/card-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PaginationComponent } from './api-rick-and-morty/components/pagination/pagination.component';
import { SearchComponent } from './api-rick-and-morty/components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiRickAndMortyComponent } from './api-rick-and-morty/api-rick-and-morty.component';


@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    NavBarComponent,
    PaginationComponent,
    SearchComponent,
    ApiRickAndMortyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
