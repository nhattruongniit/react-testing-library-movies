import React  from "react";

function App() {
  const [year, setYear] = React.useState('');
  const [movies, setMovies] = React.useState(null);

  function onChangeYear(e) {
    const { value } = e.target;
    setYear(value);
  }

  async function handleSearch() {
    const res = await fetch(`https://jsonmock.hackerrank.com/api/moviesdata?Year=${year}`)
    const data = await res.json();
    setMovies(data.data);
  }

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input 
          type="number" 
          className="large" 
          placeholder="Enter Year eg 2015" data-testid="app-input"
          onChange={onChangeYear}
        />
        <button 
          className="" 
          data-testid="submit-button"
          onClick={handleSearch}
        >
          Search
        </button>
      </section>

      <ul className="mt-50 styled" data-testid="movieList">

      {movies && movies.length > 0 && (
        <>
          {movies.map(movie => (
            <li key={movie.imdbID} className="slide-up-fade-in py-10">
              {movie.Title}
            </li>
          ))}
        </>
      )}
        </ul>
      
        {movies && movies.length === 0 && <div className="mt-50 slide-up-fade-in" data-testid="no-result">No Results Found</div>}
      </div>
  );
}

export default App