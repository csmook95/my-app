import { useState, useEffect } from "react"
import MovieItem from "./movie";

type Movie = {
    id: number
    url: string
    imdb_code: string
    title: string
    title_english: string
    title_long: string
    slug: string
    year: number
    rating: number
    runtime: number
    genres: string[],
    summary: string
    description_full: string
    synopsis: string
    yt_trailer_code: string
    language: string
    mpa_rating: string
    background_image: string
    background_image_original: string
    small_cover_image: string
    medium_cover_image: string
    large_cover_image: string
    state: string
    torrents:
    {
        url: string
        hash: string
        quality: string
        type: string
        seeds: number
        peers: number
        size: string
        size_bytes: number
        date_uploaded: string
        date_uploaded_unix: number
    }[],
    date_uploaded: string,
    date_uploaded_unix: number
}

function Component() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([])
    const getMovies = async () => {
        const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
        const json = await response.json()
        setMovies(json.data.movies)
        setLoading(false)
    }
    useEffect(() => { getMovies() }, [])

    return (
        <div>
            {loading
                ? <h1>Loading...</h1>
                : (<div>
                    {movies.map((movie: Movie) =>
                        <MovieItem key={movie.id} movie={movie}></MovieItem>)}
                </div>)}
        </div>
    )
}

export default Component