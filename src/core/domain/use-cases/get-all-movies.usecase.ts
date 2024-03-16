import { UseCase } from "../../base/use-case";
import MoviesFilter from "../dtos/movies-filter.model";
import Movie from "../models/movie.model";
import { MovieRepository } from "../repositories/movie.repository";

export class GetAllMoviesUseCase implements UseCase<MoviesFilter, Movie[]> {
    constructor(private movieRepository: MovieRepository) {}

    execute(params: MoviesFilter): Promise<Movie[]> {
        return this.movieRepository.getAllMovies(params);
    }
}
