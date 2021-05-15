import { useEffect, useState } from 'react'
import './App.css';
import Home from './components/Home'
import MainContext from './context/MainContext'
import { Route, Switch } from 'react-router-dom'
import CourseDetails from './components/CourseDetails'
import Header from './components/header';

function App() {

  let allCourses = [];
  const [courses, setCourses] = useState([])
  const [searchWord, setSearchWord] = useState('')
  const [detailCourse, setDetailCourse] = useState([])

  useEffect(() => {
    fetch('http://localhost:3500/')
      .then(response => response.json())
      .then(items => {
        // console.log(items);
        Object.keys(items).map(key => {
          return allCourses.push(items[key])
        })
        allCourses.push(items)
        setCourses(items)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    setCourses(courses.filter(course => course.course_name.toLowerCase().includes(searchWord)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchWord])

  console.log(allCourses);
  const data = {
    allCourses,
    courses,
    detailCourse,
    setDetailCourse,
    searchWord,
    setSearchWord

  }
  return (
    <MainContext.Provider value={data}>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/course/:id" render={(props) => <CourseDetails {...props} />} />
        </Switch>

        {/* {
          allCourses &&
          allCourses.map((course, i) => <p key={i}>{course.course_definition}</p>)
        } */}
      </div>
    </MainContext.Provider>
  );
}

export default App;
