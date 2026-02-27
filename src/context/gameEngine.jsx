import { useState, createContext, useContext } from "react";
import { PuzzleBoxConfig, StartConfig, Tiles } from "../lib/config.js";

const GameEngine = createContext();

export function GameEngineProvider({ children }) {
    const [positions, setPositions] = useState(StartConfig.map((tile) => ({
        left: tile.position.x,
        right: tile.position.x + tile.type.Dimensions.width,
        top: tile.position.y,
        bottom: tile.position.y + tile.type.Dimensions.height
    })));
    const [isFinished, setIsFinished] = useState(false);

    const goalTileIndex = StartConfig.map((tile) => tile.type).indexOf(Tiles.Goal);

    function updatePosition(index, newX, newY) {
        setPositions((current) => current.map((tile, i) => (
            index === i ? {
                left: newX,
                right: newX + StartConfig[i].type.Dimensions.width,
                top: newY,
                bottom: newY + StartConfig[i].type.Dimensions.height
            } : tile
        )));
        setIsFinished(index === goalTileIndex && newX === PuzzleBoxConfig.Dimensions.width / 4 && newY === PuzzleBoxConfig.Dimensions.height - Tiles.Goal.Dimensions.height);
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
                PuzzleBoxConfig.Dimensions.width,
                ...horizontal
                    .filter((tile) => tile.left >= draggingRight)
                    .map((tile) => tile.left)
            ) - draggingWidth,
            bottom: Math.min(
                PuzzleBoxConfig.Dimensions.height,
                ...vertical
                    .filter((tile) => tile.top >= draggingBottom)
                    .map((tile) => tile.top)
            ) - draggingHeight
        }
    }

    return (
        <GameEngine.Provider
            value={{ isFinished, goalTileIndex, updatePosition, getBounds }}
        >
            {children}
        </GameEngine.Provider>
    );
}

export function useGameEngine() {
    return useContext(GameEngine);
}
