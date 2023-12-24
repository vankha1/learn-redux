import "./header.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom";

function Header() {

    const checkedPath = ["/change-mind", "/form-submit"].some((element) => element === window.location.pathname);

    return (
        <header className='header'>
            <div className='logo'>
                GAMELOFT
                <span className='slogan'>FAMILIES USING TECHNOLOGY SURVEY</span>
            </div>
            <div  className='change-my-mind-btn'>
                <Link to="/change-mind" style={{ textDecoration: checkedPath ? "" : "none", color: "#666666" }}> I HAVE CHANGED MY MIND</Link>
                {!checkedPath && <ArrowForwardIosIcon color="#666666" />}
            </div>
        </header>
    )
}

export default Header;
