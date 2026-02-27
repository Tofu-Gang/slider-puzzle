import { useGameEngine } from "../context/gameEngine.jsx";
import { PuzzleBoxConfig } from "../lib/config.js";
import { StartConfig } from "../lib/config.js";
import Tile from "./Tile.jsx";

function PuzzleBox() {
    const { isFinished, goalTileIndex, updatePosition, getBounds } = useGameEngine();

    return (
        <div
            className={`mx-auto mt-20 ${PuzzleBoxConfig.Colors.bg} ${PuzzleBoxConfig.Colors.border}`}
            style={{
                width: `${PuzzleBoxConfig.Dimensions.width + PuzzleBoxConfig.Dimensions.borderWidth * 2}px`,
                height: `${PuzzleBoxConfig.Dimensions.height + PuzzleBoxConfig.Dimensions.borderWidth * 2}px`,
                borderWidth: `${PuzzleBoxConfig.Dimensions.borderWidth}px`
            }}
        >
            {StartConfig.map((tile, index) => (
                <Tile
                    key={index}
                    index={index}
                    defaultPosition={tile.position}
                    bounds={getBounds(index)}
                    isGoal={index === goalTileIndex}
                    disabled={isFinished}
                    width={tile.type.Dimensions.width}
                    height={tile.type.Dimensions.height}
                    bgColor={tile.type.Colors.bg}
                    borderColor={tile.type.Colors.border}
                    updatePosition={updatePosition}
                />
            ))}
            <div
                className={`relative ${PuzzleBoxConfig.Colors.bg}`}
                style={{
                    width: `${PuzzleBoxConfig.Dimensions.width / 2}px`,
                    height: `${PuzzleBoxConfig.Dimensions.borderWidth}px`,
                    left: `${PuzzleBoxConfig.Dimensions.width / 4}px`,
                    top: `${PuzzleBoxConfig.Dimensions.height}px`
                }}
            />
        </div>
    );
}

export default PuzzleBox;
