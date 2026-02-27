import Draggable from "react-draggable";
import { useRef } from "react";
import { PuzzleBoxConfig } from "../lib/config.js";

function Tile({ index, defaultPosition, bounds, isGoal, disabled, width, height, bgColor, borderColor, updatePosition }) {
    const ref = useRef(null);

    function onDrag(event, data) {
        updatePosition(index, data.x, data.y);
    }

    return (
        <Draggable
            nodeRef={ref}
            defaultPosition={defaultPosition}
            bounds={bounds}
            disabled={disabled}
            onDrag={onDrag}
            grid={[PuzzleBoxConfig.Dimensions.width / 4, PuzzleBoxConfig.Dimensions.height / 5]}
        >
            <div
                ref={ref}
                className={`${bgColor} absolute rounded-xl border ${borderColor} ${disabled ? "" : "cursor-pointer"}`}
                style={{
                    width,
                    height,
                    marginTop: isGoal && disabled && "300px",
                    opacity: isGoal && disabled ? "0" : "1",
                    transition: isGoal && disabled ? "all 1s ease-out": "all 0.2s ease-out"
                }}
            />
        </Draggable>
    );
}

export default Tile;
