export class Movie {
    id: string;
    title: string;
    year: number;
    director: string;
    duration: number;
    country: string;
    "imdb-ref": string;
    "alt-titles": Map<string, string>;
  }