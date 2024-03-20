import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Heaader/Header";
import Footer from "../Footer/Footer";

 

const Home = () => {
    const navigation = useNavigation()  ;
    const location = useLocation() ; 
    console.log(location);
    return (
        <div>
        <Header></Header>
        {
            navigation.state === 'loading' ? 'loading...'  :   <Outlet></Outlet>
        }
           <h2>This is home Comonent</h2> 
         
           <Footer></Footer>
        </div>
    );
};

export default Home;