
import Cards from '../cards';
import { useContext } from 'react'
import MainContext from '../../context/MainContext'
import { Link, Redirect } from 'react-router-dom';

const Search = () => {
  const { searchWord, setSearchWord } = useContext(MainContext)
  
  return (
    <div class="search">
      <input type="search" name="searchInput" id="searchInput" class="search-input-mobile" value={searchWord} placeholder="search courses" onChange={(event) => setSearchWord(event.target.value)} />
    </div>

  );
}

export default Search;
