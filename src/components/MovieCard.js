import React from "react";
import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <Card
        style={{
          width: "12rem",
          color: "black",
          margin: "20px 10px",
          fontSize: 12,
        }}
      >
        <Link to={`/movie/${movie.id}`}>
          <Card.Img variant="top" src={movie.img} />
        </Link>
      </Card>
    </div>
  );
};

export default MovieCard;
