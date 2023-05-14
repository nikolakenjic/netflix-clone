import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Row from './components/Row';
import requests from './requests';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Banner />

      <Row title="Trending Now" fetchURL={requests.fetchTrending} isLargeRow />
      <Row title="Netflix Original" fetchURL={requests.fetchNetflixOriginals} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
};

export default App;

// Get API key from tmdb
// 21475c067722582a4215d2d5564f158e
