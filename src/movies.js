import React from "react";
import PropTypes from "prop-types";
import "./movie.css";

function Movie({ year, title, summary, poster, genres }) {
  const limited_summary = summary.substr(0, 150);
  console.log(limited_summary);

  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <div className="movie__genres">
          {genres.map((genre, index) => (
            <div key={index} className="genres__genre">
              {genre}
            </div>
          ))}
        </div>
        <p className="movie__summary">{limited_summary}...</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
