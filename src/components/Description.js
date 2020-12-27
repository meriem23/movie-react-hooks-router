import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";

const Description = (props) => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    setMovie(props.movies.filter((el) => el.id === props.match.params.id)[0]);
  });
  return (
    <div>
      {movie && (
        <Card
          style={{
            width: "20rem",
            color: "black",
            margin: "20px 10px",
            fontSize: 12,
          }}
        >
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={movie.rate}
              />
              <Card.Text>{movie.description}</Card.Text>
            </Card.Text>
            <a href={movie.trailer}>
              <Button variant="secondary">Go Watch the trailer</Button>
            </a>
            <Link to="/">
              <Button variant="warning">Go back</Button>
            </Link>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Description;
