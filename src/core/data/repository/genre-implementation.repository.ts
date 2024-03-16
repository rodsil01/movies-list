import { Injectable } from "@angular/core";

import axios from 'axios';
import Data from "../../domain/dtos/data.model";
import { GenreRepository } from "../../domain/repositories/genre.repository";

@Injectable({
    providedIn: 'root',
})
export class GenreImplementationRepository extends GenreRepository {
    override async getAllGenres(): Promise<string[]> {
        try {
            const response = await axios.get<Data>('assets/data.json');

            if (!response?.data?.genres) return [];

            return response.data.genres;
        } catch {
            return [];
        }
    }
}
