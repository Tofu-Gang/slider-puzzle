import Tile from "./components/Tile.jsx";
import { PuzzleBox, StartConfig } from "./lib/config.js";

function App() {
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
                    defaultPosition={tile.position}
                    bounds={{
                        left: 0,
                        top: 0,
                        right: PuzzleBox.Dimensions.width - tile.type.Dimensions.width,
                        bottom: PuzzleBox.Dimensions.height - tile.type.Dimensions.height}}
                    width={tile.type.Dimensions.width}
                    height={tile.type.Dimensions.height}
                    bgColor={tile.type.Colors.bg}
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
