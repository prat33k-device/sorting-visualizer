import React from "react";
import Button from '@mui/material/Button';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SliderBox from "./SliderBox";

function MenuBar(props) {

    
    function handleSpeedChange(event) {
        const value = event.target.value;

        props.handleSortingSpeed(value);
        event.preventDefault();
    } 

    function handleSortClick(event) {
        props.sort(event);
        event.preventDefault();
    }

    function handleRandomClick(event) {
        props.handleRandomClick()
        event.preventDefault();
    }

    return <div className="menuBar">
        <h1 className="heading">Sorting Visualizer</h1>
        <form>
            
            <SliderBox 
                lableText="Size"
                sliderName="arrSize"
                defaultSize={props.defaultSize}
                value={props.arrSize}
                handleChange={props.handleSizeChange}
                valueLabelDisplay="auto"
                min={10}
                max={80}
            />

            <div className="menuButtons">
                {/* <div className="menuBottons-inner-div"> */}

                    <Button
                        name="bubbleSort"
                        onClick={handleSortClick}
                        variant="contained"
                        disableElevation
                        sx={{
                            color: "#1B314B"
                        }}
                    >
                    Bubble Sort
                    </Button>

                    <Button
                        name="mergeSort"
                        onClick={handleSortClick}
                        variant="contained"
                        disableElevation
                        sx={{
                            // color: "#1B314B"
                        }}
                    >
                    Merge Sort
                    </Button>

                    <Button 
                        color="secondary"
                        onClick={handleRandomClick}
                    >
                        <ShuffleIcon />
                    </Button>

                {/* </div>  */}
            </div>

            <SliderBox 
                lableText="Sorting Speed"
                sliderName="sortingSpeed"
                defaultSize={props.defaultSpeed}
                value={props.speed}
                handleChange={handleSpeedChange}
                valueLabelDisplay="auto"
                min={0}
                max={props.maxSpeed}
            />
            
        </form>
    </div>;

}

export default MenuBar;