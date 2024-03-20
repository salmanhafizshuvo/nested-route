import { Link, useNavigate } from "react-router-dom";

 
const Post = ({post}) => {
   const {id , title , body} = post

    const navigate = useNavigate();

   const handleShowDetail = () => {
    navigate(`/post/${id}`);
   }

    return (
        <div className=" border-solid border-2 border-sky-400 rounded-xl">
            <h4>Post Of id : {id}</h4>
            <h4>Post Of title : {title}</h4>
                <Link to={`/post/${id}`}>Post details</Link>
                <Link  to={`/post/${id}`}><button>Show Details</button></Link>
                <button onClick={handleShowDetail}>click to show details </button>
        </div>
    );
};

export default Post;