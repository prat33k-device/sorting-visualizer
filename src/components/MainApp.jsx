import React, {useState} from "react";
import MenuBar from "./MenuBar";
import Manhattan from "./Manhattan";
import randomArray from "../algorithms/randomArray";
import bubbleSort from "../algorithms/bubbleSort";

function MainApp(props) {

    const defaultSize = 20;
    const defaultSpeed = 50;

    const [arrSize, setArrSize] = useState(defaultSize);
    // bars = [{h: 100, classes: "extra classes names"}, {}, ...]
    const [bars, setBars] = useState(
        randomArray(arrSize).map((ele) => {
            return {h: ele, classes: ""};
        })
    );


    function handleSizeChange(event) {

        const value = event.target.value;
        
        
        setArrSize(value);
        setBars(
            randomArray(arrSize).map((ele) => {
                return {h: ele, classes: ""};
            })
        );
    }

    function handleRandomClick() {
        setBars(
            randomArray(arrSize).map((ele) => {
                return {h: ele, classes: ""};
            })
        );
    }

    function sortingFUNC() {
        bubbleSort(bars, setBars);
    }

    return <React.Fragment>

            <MenuBar 
                handleSizeChange={handleSizeChange}
                defaultSize={defaultSize}
                defaultSpeed={defaultSpeed}
                arrSize={arrSize}
                handleRandomClick={handleRandomClick}
                sort={sortingFUNC}

            />
            <Manhattan 
                arr={bars}
            />

    </React.Fragment>;
}

export default MainApp;