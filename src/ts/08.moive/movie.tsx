
type props = {
    movie: Movie
}
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

function MovieItem({ movie }: props) {

    return (
        <div>
            <div key={movie.id}>
                <img
                    src={movie.medium_cover_image}
                    alt={movie.title}></img>
                <h2>{movie.title}</h2>
                <ul>
                    {movie.genres.map((value, index) =>
                        <li key={index}>{value}</li>)}
                </ul>
                <p>{movie.summary}</p>
            </div>
        </div>
    )
}

export default MovieItem