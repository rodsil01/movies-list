import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import MoviesFilter from '../../../core/domain/dtos/movies-filter.model';

@Component({
  selector: 'app-movies-list-filter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './movies-list-filter.component.html',
  styleUrl: './movies-list-filter.component.css'
})
export class MoviesListFilterComponent {
  @Output()
  onFilterChanged = new EventEmitter<MoviesFilter>();

  @Input()
  genres!: string[];

  public nameFilter?: string;
  public descriptionFilter?: string;
  public genreFilter?: string;

  public onFilterChangedHandler(): void {
    this.onFilterChanged.emit({
      title: this.nameFilter, 
      description: this.descriptionFilter, 
      genre: this.genreFilter
    });
  }

  public onFilterResetHandler(): void {
    this.onFilterChanged.emit();

    this.nameFilter = undefined;
    this.descriptionFilter = undefined;
    this.genreFilter = undefined;
  }
}
