import { useEffect, useState } from 'react'
import './App.css';
import Arrow from './components/arrow';
import Cards from './components/cards';

function App() {
  const allCoursesArray = []

  const [allCourses, setAllCourses] = useState(allCoursesArray)
  const [searchWord, setSearchWord] = useState('')
  useEffect(() => {
    fetch('http://localhost:3500/')
      .then(response => response.json())
      .then(items => {
        console.log(items);
        Object.keys(items).map(key => {
          allCoursesArray.push(items[key])
        })
        setAllCourses(items)
      })
  }, [])
  useEffect(() => {
    setAllCourses(allCourses.filter(course => course.course_name.includes(searchWord)))
  }, [searchWord])
  // const handleSubmit = (event) => {
  //   setSearchWord(event.target.value)
  // }
  return (
    <div className="App">
<<<<<<< HEAD
      <input type="search" name="searchInput" id="searchInput" value={searchWord} placeholder="search courses" onChange={(event) => setSearchWord(event.target.value)} />
      {/* {searchWord} */}
      <h1>Hello</h1>
      {
        allCourses &&
        allCourses.map((course, i) => <p key={i}>{course.course_definition}</p>)
      }
=======
      <Arrow />
      <Cards />
>>>>>>> 78499f6c633412b1b39d602f5fa4cc578b695566
    </div>
  );
}

export default App;
