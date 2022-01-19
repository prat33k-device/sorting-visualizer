import React, {useState} from "react";
import MenuBar from "./MenuBar";
import Manhattan from "./Manhattan";
import randomArray from "../algorithms/randomArray";
import {bubbleSort} from "../algorithms/bubbleSort";
import {handleMergeSort} from "../algorithms/mergeSort";
import isSorting from "../algorithms/isSorting";


function MainApp(props) {

    const defaultSize = 4;
    const defaultSpeed = 150;
    const maxSpeed = 200;

    const [arrSize, setArrSize] = useState(defaultSize);
    const [sortingSpeed, setSortingSpeed] = useState(defaultSpeed);

    // bars = [{h: 100, classes: "extra classes names"}, {}, ...]
    const [bars, setBars] = useState(
        randomArray(arrSize).map((ele) => {
            return {h: ele, classes: ""};
        })
    );

    function handleSizeChange(event) {
        if(isSorting()) return;

        const value = event.target.value;
        
        
        setArrSize(value);
        setBars(
            randomArray(arrSize).map((ele) => {
                return {h: ele, classes: ""};
            })
        );
    }

    function handleRandomClick() {
        if(isSorting()) return;

        setBars(
            randomArray(arrSize).map((ele) => {
                return {h: ele, classes: ""};
            })
        );
    }

    function handleSortingSpeed(speed) {
        if(isSorting()) return;

        setSortingSpeed(speed);
    }

    function sortingFUNC(event) {
        if(isSorting()) return;
        
        const sortName = event.target.name;

        if(sortName === "bubbleSort") {
            bubbleSort(bars, setBars, maxSpeed - sortingSpeed);
        } else if(sortName === "mergeSort") {
            handleMergeSort(bars, setBars, maxSpeed - sortingSpeed);
        }
    }

    return <React.Fragment>

            <MenuBar 
                handleSizeChange={handleSizeChange}
                arrSize={arrSize}
                handleRandomClick={handleRandomClick}
                sort={sortingFUNC}
                defaultSize={defaultSize}
                defaultSpeed={defaultSpeed}
                maxSpeed={maxSpeed}
                speed={sortingSpeed}
                handleSortingSpeed={handleSortingSpeed}

            />
            <Manhattan 
                arr={bars}
            />

    </React.Fragment>;
}

export default MainApp;