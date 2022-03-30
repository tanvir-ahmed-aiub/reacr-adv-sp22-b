import {Link} from 'react-router-dom';
const Header=()=>{

    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="">Profile</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/event">Event Handle</Link>
            <Link to="/posts">Posts</Link>
        </div>
    )
}
export default Header;