import { Link } from "react-router-dom";

 
const Post = ({post}) => {
   const {id , title , body} = post
    return (
        <div className=" border-solid border-2 border-sky-400 rounded-xl">
            <h4>Post Of id : {id}</h4>
            <h4>Post Of title : {title}</h4>
                <Link to={`/post/${id}`}>Post details</Link>
                <Link  to={`/post/${id}`}><button>Show Details</button></Link>
        </div>
    );
};

export default Post;