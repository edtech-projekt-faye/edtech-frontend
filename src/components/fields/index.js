import './style.css';

const fields = () => {
    return (
        <form action="/" className="logIn-form">
            <input type="text" name="" value="" className="searchField"></input>
            <input type="text" placeholder="enter Username" name="uname" className="logInField" required></input>
            <input type="password" placeholder="enter Password" name="psw" className="passwordField" required></input>
            <input type="submit" value="Submit"></input>
        </form>
    );
}

export default fields;