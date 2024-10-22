import {Component} from '@angular/core';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {
  movies: any[] = [];

  constructor(private moviesService: MoviesService) {
  }

  async onGenreChange(genreId: number) {
    this.movies = await this.moviesService.getMoviesByGenre(genreId);
  }

  getImageUrl(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }
}
