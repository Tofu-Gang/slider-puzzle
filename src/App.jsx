import { useState } from "react";
import { PuzzleBox, StartConfig, Tiles } from "./lib/config.js";
import Tile from "./components/Tile.jsx";

function App() {
    const [positions, setPositions] = useState(StartConfig.map((tile) => ({
        left: tile.position.x,
        right: tile.position.x + tile.type.Dimensions.width,
        top: tile.position.y,
        bottom: tile.position.y + tile.type.Dimensions.height
    })));
    const [isFinished, setIsFinished] = useState(false);

    function updatePosition(index, newX, newY) {
        setPositions((current) => current.map((tile, i) => (
            index === i ? {
                left: newX,
                right: newX + StartConfig[i].type.Dimensions.width,
                top: newY,
                bottom: newY + StartConfig[i].type.Dimensions.height
            } : tile
        )));
        const goalTileIndex = StartConfig.map((tile) => tile.type).indexOf(Tiles.Goal);
        setIsFinished(index === goalTileIndex && newX === PuzzleBox.Dimensions.width / 4 && newY === PuzzleBox.Dimensions.height - Tiles.Goal.Dimensions.height);
    }

    function getBounds(index) {
        const draggingLeft = positions[index].left;
        const draggingRight = positions[index].right;
        const draggingTop = positions[index].top;
        const draggingBottom = positions[index].bottom;
        const draggingWidth = StartConfig[index].type.Dimensions.width;
        const draggingHeight = StartConfig[index].type.Dimensions.height;

        const others = positions.filter((_, i) => i !== index);
        const horizontal = others.filter((tile) => (
                draggingTop > tile.top && draggingTop < tile.bottom) ||
            (draggingBottom > tile.top && draggingBottom < tile.bottom) ||
            (tile.top > draggingTop && tile.top < draggingBottom) ||
            (tile.bottom > draggingTop && tile.bottom < draggingBottom) ||
            draggingTop === tile.top && draggingBottom === tile.bottom);
        const vertical = others.filter((tile) => (
                draggingLeft > tile.left && draggingLeft < tile.right) ||
            (draggingRight > tile.left && draggingRight < tile.right) ||
            (tile.left > draggingLeft && tile.left < draggingRight) ||
            (tile.right > draggingLeft && tile.right < draggingRight) ||
            draggingRight === tile.right && draggingLeft === tile.left);
        return {
            left: Math.max(
                0,
                ...horizontal
                    .filter((tile) => tile.right <= draggingLeft)
                    .map((tile) => tile.right)
            ),
            top: Math.max(
                0,
                ...vertical
                    .filter((tile) => tile.bottom <= draggingTop)
                    .map((tile) => tile.bottom)
            ),
            right: Math.min(
                PuzzleBox.Dimensions.width,
                ...horizontal
                    .filter((tile) => tile.left >= draggingRight)
                    .map((tile) => tile.left)
            ) - draggingWidth,
            bottom: Math.min(
                PuzzleBox.Dimensions.height,
                ...vertical
                    .filter((tile) => tile.top >= draggingBottom)
                    .map((tile) => tile.top)
            ) - draggingHeight
        }
    }

    return (
        <>
            <div
                className={`mx-auto mt-20 ${PuzzleBox.Colors.bg} ${PuzzleBox.Colors.border}`}
                style={{
                    width: `${PuzzleBox.Dimensions.width + PuzzleBox.Dimensions.borderWidth * 2}px`,
                    height: `${PuzzleBox.Dimensions.height + PuzzleBox.Dimensions.borderWidth * 2}px`,
                    borderWidth: `${PuzzleBox.Dimensions.borderWidth}px`
                }}
            >
                {StartConfig.map((tile, index) => (
                    <Tile
                        key={index}
                        index={index}
                        defaultPosition={tile.position}
                        bounds={getBounds(index)}
                        disabled={isFinished}
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
                        top: `${PuzzleBox.Dimensions.height}px`
                    }}/>
            </div>
            {isFinished &&
                <div
                    className={`relative mx-auto ${PuzzleBox.Colors.bg} ${PuzzleBox.Colors.border} flex justify-center items-center`}
                    style={{
                        width: `${PuzzleBox.Dimensions.width * 2}px`,
                        height: `${PuzzleBox.Dimensions.height * 3 / 5}px`,
                        borderWidth: `${PuzzleBox.Dimensions.borderWidth}px`,
                        bottom: `${4 * PuzzleBox.Dimensions.height / 5}px`
                    }}
                >
                    FINISHED!!!
                </div>
            }
        </>
    );
}

export default App;
