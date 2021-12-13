import React from "react";
import './Circle.css';

interface ICircle {
    userCount: number
}
const Circle: React.FunctionComponent<ICircle> = ({userCount}) => {
    return (
        <div className="wrapper">
            <div className="wrapper-circle"></div>{userCount}
        </div>
    )
}

export default Circle;