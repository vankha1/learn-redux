import "./header.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                GAMELOFT
                <span className='slogan'>FAMILIES USING TECHNOLOGY SURVEY</span>
            </div>
            <div  className='change-my-mind-btn'>
                <Link to="/change-mind"> I HAVE CHANGED MY MIND</Link>
                <ArrowForwardIosIcon />
            </div>
        </header>
    )
}

export default Header;
