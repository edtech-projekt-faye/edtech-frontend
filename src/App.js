import { useEffect, useState } from 'react'
import './App.css';
import Arrow from './components/arrow';
import Cards from './components/cards/Cards.jsx';
import MainContext from './context/MainContext'
import { Route, Switch } from 'react-router-dom'
import CourseDetails from './components/CourseDetails'

function App() {

  const [allCourses, setAllCourses] = useState([])
  const [courses, setCourses] = useState([])
  const [searchWord, setSearchWord] = useState('')

  // Object.keys(allCourses).map(key => {
  //   return allCoursesArray.push(allCourses[key])
  // })

  useEffect(() => {
    fetch('http://localhost:3500/')
      .then(response => response.json())
      .then(items => {
        // console.log(items);
        setAllCourses(items)
      })
  }, [])
  useEffect(() => {
    setCourses(allCourses.filter(course => course.course_name.includes(searchWord)))
  }, [searchWord])
  // const handleSubmit = (event) => {
  //   setSearchWord(event.target.value)
  // }
  const data = {
    allCourses,
    courses
  }
  return (
    <div className="App">
      <MainContext.Provider value={data}>
        <Switch>
          <Route path="/course/:id" render={(props) => <CourseDetails {...props} />} />
        </Switch>
        <input type="search" name="searchInput" id="searchInput" value={searchWord} placeholder="search courses" onChange={(event) => setSearchWord(event.target.value)} />
        {/* {searchWord} */}
        <h1>Hello</h1>
        {/* {
          allCourses &&
          allCourses.map((course, i) => <p key={i}>{course.course_definition}</p>)
        } */}
        <Arrow />
        <Cards />
      </MainContext.Provider>

    </div>
  );
}

export default App;
