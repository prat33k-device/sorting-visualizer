import React from "react";
import Slider from '@mui/material/Slider';



function SliderBox(props) {

    return <div className="slider-outer-div">
    <div className="slider-div">
        <span className="lable">{props.lableText}</span>
        <Slider
            name={props.sliderName}
            defaultValue={props.defaultSize}

            value={props.value}

            onChange={(event) => {
                props.handleChange(event);
                event.preventDefault();
            }}

            valueLabelDisplay={props.valueLabelDisplay}
            min={props.min}
            max={props.max}
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
</div>;

}

export default SliderBox;