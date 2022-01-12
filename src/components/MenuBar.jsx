import React, {useState} from "react";
import Button from '@mui/material/Button';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SliderBox from "./SliderBox";

function MenuBar(props) {

    const [sortingSpeed, setSortingSpeed] = useState(props.defaultSpeed);

    function handleSpeedChange(event) {
        const value = event.target.value;

        setSortingSpeed(value);
    } 

    function handleSortClick(event) {
        props.sort();
        event.preventDefault();
    }

    function handleRandomClick(event) {
        props.handleRandomClick()
        event.preventDefault();
    }

    return <div className="menuBar">
        <h1 className="heading">Bubble Sort</h1>
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
                <div className="menuBottons-inner-div">

                    <Button 
                        color="secondary"
                        onClick={handleRandomClick}
                    >
                        <ShuffleIcon />
                    </Button>

                    <Button
                        onClick={handleSortClick}

                        variant="contained"
                        disableElevation
                        sx={{
                            color: "#1B314B"
                        }}
                    >
                    SORT
                    </Button>

                </div> 
            </div>

            <SliderBox 
                lableText="Sorting Speed"
                sliderName="sortingSpeed"
                defaultSize={props.defaultSpeed}
                value={sortingSpeed}
                handleChange={handleSpeedChange}
                valueLabelDisplay="auto"
                min={1}
                max={100}
            />
            
        </form>
    </div>;

}

export default MenuBar;