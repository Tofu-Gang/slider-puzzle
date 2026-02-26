import Draggable from "react-draggable";
import { useRef } from "react";

function Tile({ index, defaultPosition, bounds, width, height, bgColor, borderColor, updatePosition }) {
    const ref = useRef(null);

    function onDrag(event, data) {
        updatePosition(index, data.x, data.y);
    }

    return (
        <Draggable
            nodeRef={ref}
            defaultPosition={defaultPosition}
            bounds={bounds}
            onDrag={onDrag}
        >
            <div
                ref={ref}
                className={`${bgColor} absolute rounded-xl border ${borderColor} cursor-pointer`}
                style={{ width, height }}
            />
        </Draggable>
    );
}

export default Tile;
