import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        //importing props
        super(props);
        console.log(props);

        //state variable
        this.state= {
            count: 0,
            count2: 0,
        }
    }

    render() {
       
    
        // const { userName, location } = this.props
         const { count, count2 } = this.state;

        return (
            <div className="user-card">
                <h1>Count is: {count}</h1>
                {/* <button onClick={()=>{
                    this.setState({
                        
                    })
                }}> count +</button> */}
                <h1>Count is: {count2}</h1>
                <button onClick={()=>{
                    this.setState({
                        count2: this.state.count2 + 1, 
                        count: this.state.count + 1
                    })
                }}> count2 +</button>
                {/* <h2>Name: {userName}</h2>
                <h3>Location: {location}</h3>
                <h3>Contact: 9898769876</h3> */}
            </div>            
        );
    }
}

export default UserClass; 