import { Injectable } from "@angular/core";
import { MovieRepository } from "../../domain/repositories/movie.repository";
import MoviesFilter from "../../domain/dtos/movies-filter.model";
import Movie from "../../domain/models/movie.model";

import axios from 'axios';
import Data from "../../domain/dtos/data.model";

@Injectable({
    providedIn: 'root',
})
export class MovieImplementationRepository extends MovieRepository {
    override async getAllMovies(filter?: MoviesFilter): Promise<Movie[]> {
        try {
            const response = await axios.get<Data>('assets/data.json');

            if (!response?.data?.movies) return [];

            return response.data.movies
                .filter(m => !filter || !filter.title || m.title.toLocaleLowerCase().includes(filter.title.toLocaleLowerCase()))
                .filter(m => !filter || !filter.description || m.description.toLocaleLowerCase().includes(filter.description.toLocaleLowerCase()))
                .filter(m => !filter || !filter.genre || m.genre.toLocaleLowerCase().includes(filter.genre.toLocaleLowerCase()));
        } catch {
            return [];
        }
    }
}
