import { useEffect, useState } from 'react'
import './App.css';

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
      <input type="search" name="searchInput" id="searchInput" value={searchWord} placeholder="search courses" onChange={(event) => setSearchWord(event.target.value)} />
      {/* {searchWord} */}
      <h1>Hello</h1>
      {
        allCourses &&
        allCourses.map((course, i) => <p key={i}>{course.course_definition}</p>)
      }
    </div>
  );
}

export default App;
