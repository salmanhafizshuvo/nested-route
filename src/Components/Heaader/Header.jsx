import { Link } from "react-router-dom";

 

const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <nav className=" space-x-3  gap-3  ">
            <Link to='/'>Home </Link>
            <Link to='/About'>About </Link>
            <Link to='/Contract'>Contract </Link>
            <Link to='/Users'>Users</Link>
           
            </nav>
        </div>
    );
};

export default Header;