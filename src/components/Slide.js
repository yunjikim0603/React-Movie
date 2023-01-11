import { useEffect, useState } from "react";
import Load from "./Load";
import MovieSlide from "./MovieSlide";
import styles from "./Slide.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

//홈 슬라이드 틀
function Slide({ ApiURL }) {
  //슬라이드 부분 로딩
  const [loading, setLoading] = useState(true);
  //영화데이터
  const [movies, setMovies] = useState([]);
  //슬라이드 이동
  const [trans, setTrans] = useState(0);

  //왼쪽 버튼 동작 함수
  //영화1개 width 300px
  const onClickL = () => {
    if (trans >= 0) {
      return;
    } else {
      setTrans((current) => current + 300);
    }
  };

  //오른쪽 버튼 동작 함수
  const onClickR = () => {
    if (trans <= -2100) {
      // return;
      setTrans((current) => current + 2100);
    } else {
      setTrans((current) => current - 300);
    }
  };

  //슬라이드쇼 영화 가져오기 (그룹이름별로 나뉨)
  const getMovies = async () => {
    const json = await (await fetch(ApiURL)).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  //useEffect state가 바뀔때 로딩표시, 영화가져오기
  useEffect(() => {
    setLoading(true);
    getMovies();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.slide_show}>
        {loading ? (
          <Load />
        ) : (
          <div
            className={styles.slides}
            style={{ transform: `translateX(${trans}px)` }}
          >
            {/* MovieSlide.js로 prop 전달 */}
            {movies.map((movie) => {
              if (movie.medium_cover_image != null) {
                return (
                  <MovieSlide
                    key={movie.id}
                    id={movie.id}
                    title={movie.title_long}
                    rating={movie.rating}
                    coverImg={movie.medium_cover_image}
                  />
                );
              }
            })}
          </div>
        )}
      </div>
      {/* 슬라이드쇼 버튼 */}
      {loading ? null : (
        <div className={styles.controller}>
          <button className={styles.left} onClick={onClickL}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className={styles.right} onClick={onClickR}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}
    </div>
  );
}

export default Slide;
