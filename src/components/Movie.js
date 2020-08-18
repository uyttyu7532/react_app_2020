import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import "./Movie.css";

// state가 필요없다면 class 쓸필요x

function Movie({id,title,summary, poster,year,genres}){
    return (
    <Link to={{
        pathname: "/movie-detail",
        state:{
            year,
            title,
            summary,
            poster,
            genres
        }
    }}>
    <div className="movie">
        <img src={poster} alt={title} title={title}/>
        <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul className="genres">
        {genres.map((genre,index) =>(
            <li key={index} className="genres_genre">
                {genre}
            </li>
            ))}
            </ul>
        <p className="movie_summary">{summary}</p>
        </div>
    </div>
    </Link>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired

};

export default Movie;

