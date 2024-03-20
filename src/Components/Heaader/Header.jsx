import { Link, NavLink } from "react-router-dom";
import '../../Components/Heaader/Header.css'
 

const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <nav className=" space-x-3  gap-3  ">
            <NavLink to='/'>Home </NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/About'>About </NavLink>
            <NavLink to='/posts'>Posts</NavLink>
            <NavLink to='/Contract'>Contract </NavLink>
            
            </nav>
        </div>
    );
};

export default Header;