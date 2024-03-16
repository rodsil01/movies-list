import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MoviesListFilterComponent } from '../../components/movies-list-filter/movies-list-filter.component';
import { MoviesListTableComponent } from '../../components/movies-list-table/movies-list-table.component';

import Movie from '../../../core/domain/models/movie.model';
import { MovieRepository } from '../../../core/domain/repositories/movie.repository';
import { MovieRepositoryModule } from '../../../core/data/repository/movie-repository.module';
import { GenreRepositoryModule } from '../../../core/data/repository/genre-repository.module';
import { GenreRepository } from '../../../core/domain/repositories/genre.repository';
import MoviesFilter from '../../../core/domain/dtos/movies-filter.model';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MoviesListFilterComponent,
    MoviesListTableComponent,
    MovieRepositoryModule,
    GenreRepositoryModule
  ],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent implements OnInit {
  _genreRepository = inject(GenreRepository);
  _movieRepository = inject(MovieRepository);

  genres: string[] = [];
  movies: Movie[] = [];

  ngOnInit(): void {
    this._genreRepository.getAllGenres().then(genres => this.genres = genres);
    this._movieRepository.getAllMovies().then(movies => this.movies = movies);
  }

  public onFilterChanged(filter: MoviesFilter): void {
    this._movieRepository.getAllMovies(filter).then(movies => this.movies = movies);
  }
}
