import { NgModule } from "@angular/core";
import { GetAllMoviesUseCase } from "../../domain/use-cases/get-all-movies.usecase";
import { MovieRepository } from "../../domain/repositories/movie.repository";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { MovieImplementationRepository } from "./movie-implementation.repository";

const getAllMoviesUseCaseFactory = (
    movieRepository: MovieRepository
) => new GetAllMoviesUseCase(movieRepository);

export const getAllMoviesUseCaseProvider = {
    provide: GetAllMoviesUseCase,
    useFactory: getAllMoviesUseCaseFactory,
    deps: [MovieRepository],
};


@NgModule({
    providers: [
        getAllMoviesUseCaseProvider,
        {
            provide: MovieRepository,
            useClass: MovieImplementationRepository
        }
    ],
    imports: [CommonModule, HttpClientModule]
})
export class MovieRepositoryModule {}
