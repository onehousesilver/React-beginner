import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovieId = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    console.log(json);
  };
  useEffect(() => {
    getMovieId();
  }, []);
  return (
    <div>
      <img src={movie.medium_cover_image} alt={movie.title} />
      <h1>영화 제목: {movie.title}</h1>
      <h3>영화 내용: {movie.description_intro}</h3>
      <h3>영화 장르: {movie.genres}</h3>
      <h3>개봉년도: {movie.year}</h3>
      <h3>평점: {movie.rating}</h3>
    </div>
  );
}

export default Detail;
