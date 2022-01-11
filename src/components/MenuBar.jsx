import React, {useState} from "react";
import Button from '@mui/material/Button';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import Slider from '@mui/material/Slider';

function MenuBar(props) {

    const [sortingSpeed, setSortingSpeed] = useState(props.defaultSpeed);

    function handleSpeedChange(event) {
        const value = event.target.value;

        setSortingSpeed(value);
        event.preventDefault();
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
            <div className="slider-outer-div">
                <div className="slider-div">
                    <span className="lable">Size</span>
                    <Slider
                        name="arrSize"
                        defaultValue={props.defaultSize}
                        value={props.arrSize}
                        onChange={(event) => {
                            props.handleSizeChange(event);
                            event.preventDefault();
                        }}

                        valueLabelDisplay="auto"
                        min={1}
                        max={700}
                        sx={{
                            width: 200,
                            color: "#A381FF",
                            "& .MuiSlider-thumb": {
                                border: "solid",
                                borderColor: "white",
                                borderWidth: "2px"
                            }
                        }}
                    />
                </div>
            </div>
            

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

            <div className="slider-outer-div">
                <div className="slider-div">
                    <span className="lable">Sorting Speed</span>
                    <Slider
                        name="sortingSpeed"
                        defaultValue={props.defaultSpeed}
                        value={sortingSpeed}
                        onChange={handleSpeedChange}

                        valueLabelDisplay="auto"
                        min={1}
                        max={100}
                        sx={{
                            width: 200,
                            color: "#A381FF",
                            "& .MuiSlider-thumb": {
                                border: "solid",
                                borderColor: "white",
                                borderWidth: "2px"
                            }
                        }}
                    />
                </div>
            </div>
            
        </form>
    </div>;

}

export default MenuBar;