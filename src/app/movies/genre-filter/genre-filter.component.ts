import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-genre-filter',
  templateUrl: './genre-filter.component.html',
  styleUrls: ['./genre-filter.component.css'],
})
export class GenreFilterComponent implements OnInit {
  genres: any[] = [];

  @Output() genreSelected = new EventEmitter<number>();

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.fetchGenres();
  }

  async fetchGenres() {
    this.genres = await this.moviesService.getGenres();
  }

  onGenreSelected(genreId: number) {
    this.genreSelected.emit(genreId);
  }
}
