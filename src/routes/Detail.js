import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Load from "../components/Load";
import MovieDetail from "../components/MovieDetail";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const { id } = useParams();

  // API로부터 영화정보 데이터 가져오기
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  console.log(movie);
  return (
    <div>
      {loading ? (
        <Load />
      ) : (
        <MovieDetail
          bgImg={movie.background_image_original}
          coverImg={movie.medium_cover_image}
          title={movie.title_long}
          genres={movie.genres}
          rating={movie.rating}
          summary={movie.description_full}
          url={movie.url}
        />
        // <div>
        //   <img src={movie.background_image_original}></img>
        // </div>
      )}
    </div>
  );
}

export default Detail;
