import "./App.css";
import { Displaymovies } from "./components/Displaymovies";
function App() {
  return (
    <div className="App">
      <h1>Movie List Section</h1>
      <section className="movie-list-section">
        <Displaymovies />
      </section>
    </div>
  );
}

export default App;
