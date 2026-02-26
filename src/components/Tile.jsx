import Draggable from "react-draggable";
import { useRef } from "react";

function Tile({ defaultPosition, bounds, width, height, bgColor }) {
    const ref = useRef(null);

    return (
        <Draggable
            nodeRef={ref}
            defaultPosition={defaultPosition}
            bounds={bounds}
        >
            <div
                ref={ref}
                className={`${bgColor} absolute rounded-xl border border-amber-400`}
                style={{ width, height }}
            />
        </Draggable>
    );
}

export default Tile;
