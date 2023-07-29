import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProgressBar({ value, textColor, trailColor }) {
  return (
    <div className=" ">
      <div className="       ">
        <CircularProgressbar
          maxValue={10}
          minValue={0}
          value={value}
          text={`${value}`}
          styles={{
            path: {
              background: "white",
              // Path color
              stroke: value < 5 ? "red" : value < 7 ? "orange" : "green",
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",
              // Customize transition animation
              transition: "stroke-dashoffset 0.5s ease 0.5s",

              transformOrigin: "center center",
            },
            trail: { stroke: `${trailColor}` },
            text: {
              // Text color
              fill: `${textColor}`,
              // Text size
              fontSize: "38px",
            },
          }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
