 

const User = ({user}) => {
    const {id, name , email , phone} = user;
    return (
        <div className="border-2 p-5 rounded-xl m-5">
            <h2>{name}</h2>
            <p>email : {email}</p>
            <p>phone : {phone}</p>
        </div>
    );
};

export default User;