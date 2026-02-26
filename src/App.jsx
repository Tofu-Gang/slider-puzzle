import Draggable from "react-draggable";
import { useRef } from "react";

function App() {
    const ref = useRef(null);

    return (
        <Draggable nodeRef={ref}>
            <div ref={ref}>I can now be moved around!</div>
        </Draggable>
    );
}

export default App;
