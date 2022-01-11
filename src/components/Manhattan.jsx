import React from "react";
import Bar from "./Bar";
import uniqid from "uniqid";

function Manhattan(props) {

    

    return <div className="manhattan-outer-div">
        <div className="manhattan">

            {props.arr.map((bar) => {
                return <Bar 
                    classes={bar.classes}
                    key={uniqid()}
                    height={bar.h}
                />;
            })}

        </div>
    </div>;
}

export default Manhattan;