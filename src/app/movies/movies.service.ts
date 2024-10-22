import {Injectable} from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiKey = '2f2be4f3c9d9bb7e9b046cd8ec624889';
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor() {
  }

  async getGenres(): Promise<any> {
    const url = `${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}&language=en-US`;
    const response = await axios.get(url);
    return response.data.genres;
  }

  async getMoviesByGenre(genreId: number): Promise<any> {
    const url = `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=${genreId}`;
    const response = await axios.get(url);
    return response.data.results;
  }
}
