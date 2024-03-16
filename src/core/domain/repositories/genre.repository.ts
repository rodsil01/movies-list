export abstract class GenreRepository {
    abstract getAllGenres() : Promise<string[]>;
}
