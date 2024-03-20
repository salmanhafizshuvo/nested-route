import { Outlet } from "react-router-dom";
import Header from "../Heaader/Header";
import Footer from "../Footer/Footer";

 

const Home = () => {
    return (
        <div>
        <Header></Header>
           <h2>This is home Comonent</h2> 
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Home;