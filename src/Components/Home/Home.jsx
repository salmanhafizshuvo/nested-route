import { Outlet } from "react-router-dom";
import Header from "../Heaader/Header";

 

const Home = () => {
    return (
        <div>
        <Header></Header>
           <h2>This is home Comonent</h2> 
           <Outlet></Outlet>
        </div>
    );
};

export default Home;