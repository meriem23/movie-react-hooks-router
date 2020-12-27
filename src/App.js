import { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import "bootstrap/dist/css/bootstrap.min.css";
import { uuid } from "uuidv4";
import { BrowserRouter, Route } from "react-router-dom";
import Description from "./components/Description";

function App() {
  const [movies, setMovies] = useState([
    {
      id: uuid(),
      title: "Lara Croft: Tomb Raider",
      rate: 5,
      description:
        "Video game adventurer Lara Croft comes to life in a movie where she races against time and villains to recover powerful ancient artifacts.",
      img:
        "https://i.pinimg.com/originals/1f/fb/7b/1ffb7bf9849eb6a0f216290e302bf647.jpg",
      trailer: "https://www.youtube.com/watch?v=VlCylyAKpGA",
    },
    {
      id: uuid(),
      title: "Avengers",
      rate: 4,
      description:
        "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki from enslaving humanity.",
      img:
        "https://i.pinimg.com/originals/7a/94/80/7a94808dbb3a9a6d922d0780bc9be03d.jpg",
      trailer: "https://www.youtube.com/watch?v=eOrNdBpGMv8",
    },
    {
      id: uuid(),
      title: "21 Jump Street",
      rate: 3,
      description:
        "A pair of underachieving cops are sent back to a local high school to blend in and bring down a synthetic drug ring.",
      img:
        "https://i.pinimg.com/564x/da/65/d6/da65d6523d23136d2741fdf2cab5a852.jpg",
      trailer: "https://www.youtube.com/watch?v=RLoKtb4c4W0",
    },
  ]);
  const [keyrate, setKeyrate] = useState(0);
  const [keyword, setKeyword] = useState("");
  const search = (word) => {
    setKeyword(word);
  };

  const addMovie = (movie) => {
    setMovies(movies.concat(movie));
  };
  return (
    <div className="App-header">
      <BrowserRouter>
        <Filter keyrate={keyrate} setKeyrate={setKeyrate} search={search} />
        <MovieList
          movies={movies.filter(
            (movie) =>
              movie.rate >= keyrate &&
              movie.title
                .toLowerCase()
                .includes(keyword.toLocaleLowerCase().trim())
          )}
          addMovie={addMovie}
        />
        <Route
          path="/movie/:id"
          render={(props) => <Description {...props} movies={movies} />}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
