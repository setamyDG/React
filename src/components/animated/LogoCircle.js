import React from "react";
import '../../App.css'

class LogoCircle extends React.Component {
    render() {
        return(
            <div>
                <svg height="200" width="200">
                    <defs>
                        <linearGradient id="grad2">
                            <stop offset="0%" stopColor="#ffffff"/>
                            <stop offset="25%" stopColor="#d5d5d5"/>
                            <stop offset="50%" stopColor ="#adadad"/>
                            <stop offset="75%" stopColor="#878787"/>
                            <stop offset="100%" stopColor="#626262"/>
                        </linearGradient>
                    </defs>
                    <circle className="circle" cx="100" cy="100" r="95" stroke="url(#grad2)" strokeWidth="5"
                            fillOpacity="0"/>
                </svg>
                    <img className="logo"
                        src="https://scontent-ber1-1.xx.fbcdn.net/v/t1.0-9/35247255_1715612061840788_5513627063233282048_n.jpg?_nc_cat=0&oh=7e8c2e6ad5e5df0d55202f1dcc0bc7e6&oe=5C387E53"
                        alt="avatar"
                    />
            </div>


        );
    }
}
export default LogoCircle
