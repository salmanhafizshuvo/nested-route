import { useLoaderData } from "react-router-dom";

 

const PostDetails = () => {
    const post = useLoaderData() ; 
    const {id,title , body } = post
    return (
        <div>
            <h4>
                Post Details about : {id}

            </h4>
            <p>title : {title}</p>
            <p> <small> {body} </small> </p>
        </div>
    );
};

export default PostDetails;