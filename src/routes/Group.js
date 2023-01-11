import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Load from "../components/Load";
import MovieGroup from "../components/MovieGroup";
import styles from "./Group.module.css";

//페이지 배열
const ListArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//그룹 함수
function Group() {
  const { group, page } = useParams();
  const [loading, setLoading] = useState();
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?
  page=${page}&${group}&sort_by=rating`)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getMovies();
    return;
  }, [group, page]);

  return (
    <div className={styles.container}>
      {loading ? (
        <Load />
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <MovieGroup
              key={movie.id}
              id={movie.id}
              title={movie.title_long}
              rating={movie.rating}
              coverImg={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
        </div>
      )}

      {/* 페이징 */}
      {loading ? (
        <Load />
      ) : (
        <div className={styles.footer}>
          <div className={styles.list}>
            {ListArr.map((num) => {
              return (
                <Link to={`/page/${group}/${num}`} key={num}>
                  {num}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Group;
