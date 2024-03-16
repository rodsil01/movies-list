import MoviesFilter from "../dtos/movies-filter.model";
import Movie from "../models/movie.model";

export abstract class MovieRepository {
    abstract getAllMovies(filter?: MoviesFilter) : Promise<Movie[]>;
}
