import PropTypes from "prop-types";
import styles from "./MovieDetail.module.css";

function MovieDetail({ bgImg, coverImg, title, genres, rating, summary, url }) {
  return (
    //영화 상세정보 화면에 표시
    <div className={styles.movie}>
      <div className={styles.background}>
        <img className={styles.bgImg} src={bgImg} alt={title} />
      </div>
      <div className={styles.show}>
        <div className={styles.detail}>
          <div className={styles.detailText}>
            <h1>
              <a href={url} style={{ color: "#f1f1f1" }}>
                {title}
              </a>
            </h1>
            <h3>★ {rating} / 10</h3>
            <ul>
              {genres.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          </div>
          <div className={styles.detailImg}>
            <a href={url}>
              <img src={coverImg} alt={title} />
            </a>
          </div>
        </div>
        {summary ? (
          <div className={styles.summary}>
            <p>{summary}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
  bgImg: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number,
  summary: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default MovieDetail;
