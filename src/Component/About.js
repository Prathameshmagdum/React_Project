import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Patent Constuctor called");
    }
    async componentDidMount(){
        // const responce = await fetch(`https://api.github.com/users/${Prathameshmagdum}`)
        // const data = responce.json();
        this.timer = setInterval(()=>{
            console.log("Set Interval calling");
        }, 1000);
        console.log("Parent ComponentDidMount called");

    }
    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("Child Component will Unmount");
    }
    render(){
        console.log("Patent Render called");

        return (
            <div>
                <h1>About Us</h1>
                <h2>Im learning the namaste react from akshay saini thank you!</h2>
                {/* <p>{data.img}</p> */}
                <UserClass name={"First Child"} location={"Pimpri-Chinchwad"}/>
            </div>
        )
    }
}

export default About;