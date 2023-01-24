import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

type Params = {
    id: string
}

class Movie {
    background_image?: string
    background_image_original?: string
    date_uploaded?: string
    date_uploaded_unix?: number
    description_full?: string
    description_intro?: string
    download_count?: number
    genres?: string[]
    id?: number
    imdb_code?: string
    language?: string
    large_cover_image?: string
    like_count?: number
    medium_cover_image?: string
    mpa_rating?: string
    rating?: number
    runtime?: number
    slug?: string
    small_cover_image?: string
    title?: string
    title_english?: string
    title_long?: string
    torrents?: {
        date_uploaded: string
        date_uploaded_unix: number
        hash: string
        peers: number
        quality: string
        seeds: number
        size: string
        size_bytes: number
        type: string
        url: string
    }[]
    url?: string
    year?: number
    yt_trailer_code?: string
}

function Detail() {
    const { id }: Params = useParams()
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(new Movie())
    const getMovies = async () => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        const json = await response.json()
        setMovie(json.data.movie)
        setLoading(false)
    }
    useEffect(() => { getMovies() })
    return (
        <div>
            {loading
                ? <h1>Loading...</h1>
                : <h1>{movie.title}</h1>}
        </div>
    )
}

export default Detail