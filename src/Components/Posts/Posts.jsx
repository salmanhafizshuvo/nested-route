import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
  const posts = useLoaderData();
    return (
        <div>
                <h2>Posts : {posts.length}</h2>
                <div className="grid grid-cols-4 m-5 gap-5">
                    {
                        posts.map(post => <Post 
                        key={post.id}
                        post={post}
                        ></Post>)
                    }
                </div>
        </div>
    );
};

export default Posts;