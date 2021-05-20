import { useEffect, useState } from 'react'
import './App.css';
import MainContext from './context/MainContext'
import { Route, Switch } from 'react-router-dom'
import CourseDetails from './components/CourseDetails'
import Courses from './pages/Courses';
import { Breakpoint, BreakpointProvider } from 'react-socks'
import Home from './pages/Home/Home.jsx';
import BoardingPages from './boarding/BordingPages';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Register from './pages/Register'


function App() {

  const [allCourses, setAllCourses] = useState([])
  const [courses, setCourses] = useState([])
  const [searchWord, setSearchWord] = useState('')
  const [detailCourse, setDetailCourse] = useState([])


  useEffect(() => {
    fetch('https://dry-fortress-33352.herokuapp.com')
      .then(response => response.json())
      .then(items => {
        // console.log(items);
        // Object.keys(items).map(key => {
        //   return allCourses.push(items[key])
        // })
        setAllCourses(items)
        setCourses(items)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    if (searchWord !== '') {
      setCourses(courses.filter(course => course.course_name.toLowerCase().includes(searchWord.toLowerCase())))
      // eslint-disable-next-line react-hooks/exhaustive-deps
    } else {
      setCourses(allCourses)
    }
    // eslint-disable-next-line
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
        <BreakpointProvider>
          <Switch>

            <Route path="/" exact render={() => <Home />} />
            <Route path="/course/:id" render={(props) => <CourseDetails {...props} />} />
            <Route path="/courses" exact render={() => <Courses />} />
            <Route path="/register" render={() => <Register />} />
          </Switch>
        </BreakpointProvider>
      </div>
    </MainContext.Provider>
  );
}

export default App;
