import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./MovieSlide.module.css";

//Slide.js로부터 prop 전달 받음
function MovieSlide({ id, title, rating, coverImg }) {
  return (
    <div className={styles.movie}>
      {/* 슬라이드쇼 커버이미지 */}
      <Link to={`/movie/${id}`}>
        <img src={coverImg} alt={title} />
      </Link>
      <div className={styles.letters}>
        <div className={styles.title}>
          <div>
            <h3 className={styles.movieName}>
              {/* 슬라이드쇼 제목 */}
              <Link to={`/movie/${id}`}>
                {title.length > 40 ? `${title.slice(0, 40)}...` : title}
              </Link>
            </h3>
          </div>
        </div>
        <span>★ {rating} / 10</span>
      </div>
    </div>
  );
}
MovieSlide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  coverImg: PropTypes.string.isRequired,
};

export default MovieSlide;
