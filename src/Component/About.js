import User from "./User";
import UserClass from "./UsserClass";

const About = ()=>  {
    return (
        <div>
            <h1>About Us</h1>
            <h2>Im learning the namaste react from akshay saini thank you!</h2>
            <User name={"Prthamesh Magdum"} location={"Pimpri-Chinchwad"}/>
            <UserClass name={"Prthamesh Magdum (class)"} location={"Pimpri-Chinchwad"}/>
        </div>
    )
}

export default About;