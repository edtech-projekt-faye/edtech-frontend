
import Arrow from './arrow/Arrow';
import Cards from './cards/Cards.jsx';
import { useContext } from 'react'
import MainContext from '../context/MainContext'
import { Link } from 'react-router-dom';

const Home = () => {
  const { searchWord, setSearchWord } = useContext(MainContext)
  return (
    <div id="home">
      <Link to="/">Home</Link>
      <input type="search" name="searchInput" id="searchInput" value={searchWord} placeholder="search courses" onChange={(event) => setSearchWord(event.target.value)} />
      <Arrow />
      <Cards />
    </div>

  );
}

export default Home;
