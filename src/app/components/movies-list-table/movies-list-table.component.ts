import { Component, Input } from '@angular/core';
import Movie from '../../../core/domain/models/movie.model';

@Component({
  selector: 'app-movies-list-table',
  standalone: true,
  imports: [],
  templateUrl: './movies-list-table.component.html',
  styleUrl: './movies-list-table.component.css'
})
export class MoviesListTableComponent {
  @Input()
  movies!: Movie[];
}
