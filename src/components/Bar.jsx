import React from "react";

function Bar(props) {

    let barStyle = {
        height: props.height + "%",
    };

    const allClasses = "building " + props.classes;
    
    return <div style={barStyle} className={allClasses}>
        <span className="bar-height">{props.height}</span>
    </div>;
}

export default Bar