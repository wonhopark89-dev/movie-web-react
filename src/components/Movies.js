import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Moive({ id, year, title, summary, poster }) {
    return (
        <Link to={{
                pathname:`/moive/${id}`,
                state : {id, year, title, summary, poster}
        }}>
        <div>
            <h2>{title}</h2>
            <h3>{year}</h3>
            <h5>{summary}</h5>
            <img src={poster} width="150" />
        </div>
        </Link>
    );
}

Moive.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Moive;