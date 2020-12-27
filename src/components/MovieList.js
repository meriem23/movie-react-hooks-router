import React, { useState } from "react";
import AddMovie from "./AddMovie";
import MovieCard from "./MovieCard";
import { Button } from "react-bootstrap";

const MovieList = ({ movies, addMovie }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="danger" onClick={handleShow}>
        Add a New Movie
      </Button>
      <AddMovie handleClose={handleClose} show={show} addMovie={addMovie} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {movies.map((el, i) => (
          <MovieCard movie={el} key={i} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
