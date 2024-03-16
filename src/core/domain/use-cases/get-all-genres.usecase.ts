import { UseCase } from "../../base/use-case";
import { GenreRepository } from "../repositories/genre.repository";

export class GetAllGenresUseCase implements UseCase<void, string[]> {
    constructor(private genreRepository: GenreRepository) {}

    execute(): Promise<string[]> {
        return this.genreRepository.getAllGenres();
    }
}
