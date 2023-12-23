import Button from '@mui/material/Button';
import "./header.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                GAMELOFT
                <span>FAMILIES USING TECHNOLOGY SURVEY</span>
            </div>
            <div  className='change-my-mind-btn'>
                <a> I HAVE CHANGED MY MIND</a>
                <ArrowForwardIosIcon />
            </div>
        </header>
    )
}

export default Header;
