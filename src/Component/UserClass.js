import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            count1:1,
        }
        console.log(this.props.name+"Constuctor called");

    }
    componentDidMount(){
        console.log(this.props.name+"ComponentDidMount called");

    }
    componentWillUnmount(){
        console.log("Parent Component will Unmount");
    }
    render(){
        console.log(this.props.name+"Render called");
        const{name, location} = this.props;
        const{count,count1}=this.state;
        return(
            <div className="user-card">
                <h1>Count:{count}</h1>
                <h1>Count:{count1}</h1>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count +1,
                        count1: this.state.count +1,
                    })
                }}>Count Increase</button>
                <h2>Name: {name}</h2>
                <h3>Location:{location}</h3>
                
            </div>
        )
    }
}
export default UserClass;