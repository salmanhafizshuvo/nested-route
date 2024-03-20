import { Link, useRouteError } from "react-router-dom";

 

const Error = () => {
    const error = useRouteError() ; 
    console.log(error);
    return (
        <div>
            <h2> Oops!!! </h2>
            <p>{error.message} || {error.statusText}</p>
            {
                error.status === 404 && <div> 
                    <h1>Page Not Found</h1>
                    <Link to='/'><button>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default Error;