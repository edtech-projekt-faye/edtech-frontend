// import Buttons from '../components/buttons';
import { Link } from 'react-router-dom'

const ImproveSkills = () => {
    return (
        <div className="slider-page">
            <img className="slider-img" src="images/ImproveSkills.png" alt="intro" />
            <h2>Never stop learning!</h2>
            <Link to="/courses"><button className="button button-white">Get started</button></Link>
        </div>
    );
}

export default ImproveSkills;
