import { Link } from "react-router-dom";
import styles from "./MovieGroup.module.css";
import PropTypes from "prop-types";

function MovieGroup({ id, title, rating, coverImg, genres }) {
  return (
    <div className={styles.movie}>
      <div className={styles.show}>
        <div className={styles.text}>
          <div className={styles.title}>
            <div>
              <h2>
                <Link to={`/movie/${id}`}>
                  {title.length > 70 ? `${title.slice(0, 70)}...` : title}
                </Link>
              </h2>
            </div>
          </div>
          <hr />
          <h3>★ {rating} / 10</h3>
          <ul>
            {genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
        <div className={styles.img}>
          <Link to={`/movie/${id}`}>
            <img src={coverImg} alt={title} />
          </Link>
        </div>
      </div>
    </div>
  );
}

MovieGroup.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  coverImg: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieGroup;
