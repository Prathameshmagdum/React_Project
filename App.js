import React from "react";
import ReactDOM from 'react-dom/client';


/********
 * Header
 * -logo
 * -nav item
 * Body
 * -search
 * -Restaurant Container
 *  - restaurant card
 * Footer
 * -contact
 * -address
 * -links
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                className="logo" 
                src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}
const RestaurantCard = () =>{
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img 
            className="res-logo"
            alt="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ymjvq1ewa4tnzbpmqnip"
            />
            <h4>Prathamesh's Biryani</h4>
            <h5>cuisine, asian, hyderabadi</h5>
            <h6>5 star</h6>
            <h6>30 minutes</h6>
        </div>
    );
};
const Body = () =>{
    return (
        <div className="body">
            <div className="search">
                search
            </div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}



const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);