const User = (props) => {
    return (
        <div className="user-card">
            <h2>Name: {props.userName}</h2>
            <h3>Location: {props.location}</h3>
            <h3>Contact: 9898769876</h3>
        </div>
    )
};

export default User;