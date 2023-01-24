import { Link } from "react-router-dom"

type props = {
    id: number,
    medium_cover_image: string,
    title: string,
    genres: string[],
    summary: string
}

function MovieItem({ id, medium_cover_image, title, genres, summary }: props) {

    return (
        <div>
            <div key={id}>
                <img
                    src={medium_cover_image}
                    alt={title}></img>
                <h2>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <ul>
                    {genres.map((value, index) => (
                        <li key={index}>{value}</li>
                    ))}
                </ul>
                <p>{summary.length > 235
                    ? `${summary.slice(0, 300)}...`
                    : summary}</p>
            </div>
        </div>
    )
}

export default MovieItem