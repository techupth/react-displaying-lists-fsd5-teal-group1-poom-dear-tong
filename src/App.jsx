import "./App.css";
import MovieDisplay from "./components/MovieDisplay";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        <h1>Movie List Section</h1>
        <MovieDisplay />
      </section>
    </div>
  );
}

export default App;
