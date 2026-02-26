import Draggable from "react-draggable";
import { useRef } from "react";
import {PuzzleBox} from "../lib/config.js";

function Tile({ index, defaultPosition, bounds, disabled, width, height, bgColor, borderColor, updatePosition }) {
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
            grid={[PuzzleBox.Dimensions.width / 4, PuzzleBox.Dimensions.height / 5]}
        >
            <div
                ref={ref}
                className={`${bgColor} absolute rounded-xl border ${borderColor} ${disabled ? "" : "cursor-pointer"}`}
                style={{ width, height }}
            />
        </Draggable>
    );
}

export default Tile;
