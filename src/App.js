import React, { useEffect, useState } from 'react'
import './App.css';
import Home from './components/Home'
import MainContext from './context/MainContext'
import { Route, Switch } from 'react-router-dom'
import CourseDetails from './components/CourseDetails'
import Header from './components/header';
// import { GoogleLogin } from 'react-google-login';
// import axios from 'axios'
// import { GoogleLogout } from 'react-google-login';
// import Login from './components/Login'

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

  const [allCourses, setAllCourses] = useState([])
  const [courses, setCourses] = useState([])
  const [searchWord, setSearchWord] = useState('')
  const [detailCourse, setDetailCourse] = useState([])

  useEffect(() => {
    fetch('http://localhost:3500/courses')
      .then(response => response.json())
      .then(items => {
        setAllCourses(items)
        setCourses(items)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    if (searchWord !== '') {
      setCourses(courses.filter(course => course.course_name.toLowerCase().includes(searchWord)))
      // eslint-disable-next-line react-hooks/exhaustive-deps
    } else {
      setCourses(allCourses)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchWord])

  // console.log(allCourses);
  const data = {
    allCourses,
    courses,
    detailCourse,
    setDetailCourse,
    searchWord,
    setSearchWord,

  }
  return (
    <MainContext.Provider value={data}>
      <div className="App">
        <Header />
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
        <Switch>
          {/* <Route path="/" exact render={() => <Login />} /> */}
          <Route path="/courses" exact render={() => <Home />} />
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
