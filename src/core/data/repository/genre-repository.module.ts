import { NgModule } from "@angular/core";
import { MovieRepository } from "../../domain/repositories/movie.repository";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { GenreRepository } from "../../domain/repositories/genre.repository";
import { GetAllGenresUseCase } from "../../domain/use-cases/get-all-genres.usecase";
import { GenreImplementationRepository } from "./genre-implementation.repository";

const getAllGenresUseCaseFactory = (
    movieRepository: GenreRepository
) => new GetAllGenresUseCase(movieRepository);

export const getAllGenresUseCaseProvider = {
    provide: GetAllGenresUseCase,
    useFactory: getAllGenresUseCaseFactory,
    deps: [MovieRepository],
};


@NgModule({
    providers: [
        getAllGenresUseCaseProvider,
        {
            provide: GenreRepository,
            useClass: GenreImplementationRepository
        }
    ],
    imports: [CommonModule, HttpClientModule]
})
export class GenreRepositoryModule {}
