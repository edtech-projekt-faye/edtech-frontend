import React, { useEffect, useState } from 'react'
import './App.css';
// import Search from './components/search/Search'
import MainContext from './context/MainContext'
import { Route, Switch } from 'react-router-dom'
import CourseDetails from './components/CourseDetails'
import CourseLessons from './components/CourseLessons'
import DetailsLesson from './components/DetailsLesson'
import LessonTests from './components/LessonTests'
// import Header from './components/header';
// import { GoogleLogin } from 'react-google-login';
// import axios from 'axios'
// import { GoogleLogout } from 'react-google-login';
// import Login from './components/Login'
import Courses from './pages/Courses';
import { BreakpointProvider } from 'react-socks'
import Home from './pages/Home/Home.jsx';
// import BoardingPages from './boarding/BordingPages';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Register from './pages/Register'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'


function App() {

  // const responseGoogleSuccess = (response) => {
  //   console.log(response);
  //   console.log(response.profileObj);
  //   axios({
  //     method: "GET",
  //     url: 'http://localhost:3500/googlelogin',
  //     data: { tokenId: response.tokenId }
  //   }).then(response => {
  //     console.log('success' + response);
  //   })
  // }
  // const responseGoogleError = (response) => {

  // }
  // const logout = (response) => {

  // }
  const current_course = []
  const [allCourses, setAllCourses] = useState([])
  const [courses, setCourses] = useState([])
  const [searchWord, setSearchWord] = useState('')
  const [detailCourse, setDetailCourse] = useState([])
  const [lesson, setLesson] = useState([])

  useEffect(() => {
    // fetch('http://localhost:3500/courses')
    fetch('https://dry-fortress-33352.herokuapp.com/courses')
      .then(response => response.json())
      .then(items => {
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

  // console.log(allCourses);
  const data = {
    allCourses,
    courses,
    detailCourse,
    setDetailCourse,
    searchWord,
    setSearchWord,
    lesson,
    setLesson,
    current_course
  }
  return (
    <MainContext.Provider value={data}>
      <div className="App">
        {/* <Header /> */}
        {/* <GoogleLogin
          clientId="453961586241-52k5ikmftcd8v9qu4l13hl40or1pfl43.apps.googleusercontent.com"
          buttonText="Login With Google"
          onSuccess={responseGoogleSuccess}
          onFailure={responseGoogleError}
          cookiePolicy={'single_host_origin'}
        />
        <GoogleLogout
          clientId="453961586241-52k5ikmftcd8v9qu4l13hl40or1pfl43.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={logout}
        >
        </GoogleLogout> */}

        {/* {
          allCourses &&
          allCourses.map((course, i) => <p key={i}>{course.course_definition}</p>)
        } */}
        <BreakpointProvider>
          <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/course/:id" exact render={(props) => <CourseDetails {...props} />} />
            <Route path="/course/:id/lessons" exact render={(props) => <CourseLessons {...props} />} />
            <Route path="/course/:id/lessons/:number" exact render={(props) => <DetailsLesson {...props} />} />
            <Route path="/course/:id/lessons/:number/test" exact render={(props) => <LessonTests {...props} />} />
            <Route path="/courses" exact render={() => <Courses />} />
            <Route path="/register" render={() => <Register />} />
            <Route path="/profile" render={() => <Profile />} />
            <Route path="/dashboard" render={() => <Dashboard />} />
          </Switch>
        </BreakpointProvider>
      </div>
    </MainContext.Provider>
  );
}

export default App;
