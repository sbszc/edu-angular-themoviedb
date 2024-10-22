import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieListComponent} from './movie-list/movie-list.component';
import {GenreFilterComponent} from './genre-filter/genre-filter.component';
import {MatSelectModule} from "@angular/material/select";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    MovieListComponent,
    GenreFilterComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatGridListModule,
    MatCardModule,
  ],
  exports: [
    MovieListComponent
  ]
})
export class MoviesModule {
}
