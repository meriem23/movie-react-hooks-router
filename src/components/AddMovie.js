import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { uuid } from "uuidv4";

const AddMovie = ({ handleClose, show, addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    // id: Math.floor(Math.random() * 10),
    id: uuid(),
    title: "",
    rate: "",
    description: "",
    img: "",
    trailer: "",
  });
  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Movie Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a movie title"
                name="title"
                onChange={handleChange}
              />
              <Form.Label>Movie Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a movie description"
                name="description"
                onChange={handleChange}
              />
              <Form.Label>Movie Poster</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a url for the poster"
                name="img"
                onChange={handleChange}
              />
              <Form.Label>Movie Rate</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a rate for the movie"
                name="rate"
                onChange={handleChange}
              />
            <Form.Label>Movie Trailer</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a rate for the movie"
                name="trailer"
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              addMovie(newMovie);
            }}
          >
            Add movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
