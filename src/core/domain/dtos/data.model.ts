import Movie from "../models/movie.model";

export default interface Data {
    movies: Movie[];
    genres: string[];
}
