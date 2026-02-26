import { useState } from "react";
import { PuzzleBox, StartConfig } from "./lib/config.js";
import Tile from "./components/Tile.jsx";

function App() {
    const [positions, setPositions] = useState(StartConfig.map((tile) => ({
        left: tile.position.x,
        right: tile.position.x + tile.type.Dimensions.width,
        top: tile.position.y,
        bottom: tile.position.y + tile.type.Dimensions.height
    })));

    function updatePosition(index, newX, newY) {
        setPositions((current) => current.map((tile, i) => (
            index === i ? {
                left: newX,
                right: newX + StartConfig[i].type.Dimensions.width,
                top: newY,
                bottom: newY + StartConfig[i].type.Dimensions.height
            } : tile
        )));
    }

    function getLeftBound(index) {
        const currentTop = positions[index].top;
        const currentBottom = positions[index].bottom;
        const currentLeft = positions[index].left;
        const relevant = positions.filter((tile, i) =>
            i !== index &&
            tile.right <= currentLeft &&
            ((currentTop > tile.top && currentTop < tile.bottom) ||
                (currentBottom > tile.top && currentBottom < tile.bottom) ||
                (tile.top > currentTop && tile.top < currentBottom) ||
                (tile.bottom > currentTop && tile.bottom < currentBottom) ||
                currentTop === tile.top && currentBottom === tile.bottom));
        return Math.max(0, ...relevant.map((tile) => tile.right));
    }

    function getTopBound(index) {
        const currentLeft = positions[index].left;
        const currentRight = positions[index].right;
        const currentTop = positions[index].top;
        const relevant = positions.filter((tile, i) =>
            i !== index &&
            tile.bottom <= currentTop &&
            ((currentLeft > tile.left && currentLeft < tile.right) ||
                (currentRight > tile.left && currentRight < tile.right) ||
                (tile.left > currentLeft && tile.left < currentRight) ||
                (tile.right > currentLeft && tile.right < currentRight) ||
                currentRight === tile.right && currentLeft === tile.left));
        return Math.max(0, ...relevant.map((tile) => tile.bottom));
    }

    function getRightBound(index) {
        const currentTop = positions[index].top;
        const currentBottom = positions[index].bottom;
        const currentRight = positions[index].right;
        const currentWidth = StartConfig[index].type.Dimensions.width;
        const relevant = positions.filter((tile, i) =>
            i !== index &&
            tile.left >= currentRight &&
            ((currentTop > tile.top && currentTop < tile.bottom) ||
                (currentBottom > tile.top && currentBottom < tile.bottom) ||
                (tile.top > currentTop && tile.top < currentBottom) ||
                (tile.bottom > currentTop && tile.bottom < currentBottom) ||
                currentTop === tile.top && currentBottom === tile.bottom));
        return Math.min(PuzzleBox.Dimensions.width, ...relevant.map((tile) => tile.left)) - currentWidth;
    }

    function getBottomBound(index) {
        const currentLeft = positions[index].left;
        const currentRight = positions[index].right;
        const currentBottom = positions[index].bottom;
        const currentHeight = StartConfig[index].type.Dimensions.height;
        const relevant = positions.filter((tile, i) =>
            i !== index &&
            tile.top >= currentBottom &&
            ((currentLeft > tile.left && currentLeft < tile.right) ||
                (currentRight > tile.left && currentRight < tile.right) ||
                (tile.left > currentLeft && tile.left < currentRight) ||
                (tile.right > currentLeft && tile.right < currentRight) ||
                currentRight === tile.right && currentLeft === tile.left));
        return Math.min(PuzzleBox.Dimensions.height, ...relevant.map((tile) => tile.top)) - currentHeight;
    }

    return (
        <div
            className={`mx-auto mt-20 ${PuzzleBox.Colors.bg} ${PuzzleBox.Colors.border}`}
            style={{
                width: `${PuzzleBox.Dimensions.width + PuzzleBox.Dimensions.borderWidth * 2}px`,
                height: `${PuzzleBox.Dimensions.height + PuzzleBox.Dimensions.borderWidth * 2}px`,
                borderWidth: `${PuzzleBox.Dimensions.borderWidth}px` }}
        >
            {StartConfig.map((tile, index) => (
                <Tile
                    key={index}
                    index={index}
                    defaultPosition={tile.position}
                    bounds={{
                        left: getLeftBound(index),
                        top: getTopBound(index),
                        right: getRightBound(index),
                        bottom: getBottomBound(index)}}
                    width={tile.type.Dimensions.width}
                    height={tile.type.Dimensions.height}
                    bgColor={tile.type.Colors.bg}
                    borderColor={tile.type.Colors.border}
                    updatePosition={updatePosition}
                />
            ))}
            <div
                className={`relative ${PuzzleBox.Colors.bg}`}
                style={{
                    width: `${PuzzleBox.Dimensions.width / 2}px`,
                    height: `${PuzzleBox.Dimensions.borderWidth}px`,
                    left: `${PuzzleBox.Dimensions.width / 4}px`,
                    top: `${PuzzleBox.Dimensions.height}px` }} />
        </div>
    );
}

export default App;
