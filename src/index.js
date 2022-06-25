import { fetchWithTimeout } from './services'
const movies = require("./data/movies.json")

export default function fetchMovies() {
  const resolveFunction = () => movies;
  return fetchWithTimeout(1000).then(resolveFunction);
}

var moviePromise = fetchMovies()

moviePromise.then(function(results) { console.log(results)})