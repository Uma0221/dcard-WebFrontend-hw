import {Link} from 'react-router-dom';

function Header({open, setOpen}) {
    return(
        <header className="header">
            <div className="brand">
                <button className="menu" onClick={()=>setOpen(!open)}>☰</button>
                <Link className="caption" to="/dcard-webfrontend-hw/scenicSpot">交通部觀光景點</Link>
            </div>
        </header>
    );
}

export default Header;