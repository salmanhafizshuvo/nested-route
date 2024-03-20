import { useLoaderData, useNavigate, useParams } from "react-router-dom";

 

const PostDetails = () => {
    const post = useLoaderData() ; 
    const {postId} = useParams(); 
    const navigate = useNavigate ()
    const {id,title , body } = post
    const handleGoBack = () => {
            navigate(-1)
    }
    console.log(postId);
    return (
        <div>
            <h4>
                Post Details about : {id}

            </h4>
            <p>title : {title}</p>
            <p> <small> {body} </small> </p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;