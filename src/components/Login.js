import { useContext } from 'react'
import MainContext from '../context/MainContext'
const Login = () => {
  const { getUser } = useContext(MainContext)
  return (
    <nav>
      <ul>
        {/* <% if (user) { %> */}
        <li><a href="/auth/logout">Log out</a></li>
        {/* <% } else { %> */}
        <li><a onClick={getUser} href="/auth/login">Login</a></li>
        {/* <% } %> */}
        <li><a href="/">Homepage</a></li>
        <li><a href="/profile">Profile</a></li>

      </ul>
    </nav>
  );
}

export default Login;
