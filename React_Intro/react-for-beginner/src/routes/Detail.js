import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovieId = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
    console.log(json);
  };
  useEffect(() => {
    getMovieId();
  }, []);
  return (
    <div className={styles.movie}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div>
          <h1 className={styles.title}>{movie.title}</h1>
          <h3 className={styles.genres}>
            {movie.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </h3>
          <img
            className={styles.img}
            src={movie.medium_cover_image}
            alt={movie.title}
          />
          <h3 className={styles.year}>{movie.year}</h3>
          <h3 className={styles.rating}>
            <p>⭐ {movie.rating}</p>
          </h3>

          <p>
            {movie.description_intro > 900
              ? `${movie.description_intro.slice(0, 900)}...`
              : movie.description_intro}
          </p>
        </div>
      )}
    </div>
  );
}

export default Detail;
