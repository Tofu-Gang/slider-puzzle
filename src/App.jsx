import Tile from "./components/Tile.jsx";

function App() {
    return (
        <>
            <div
                className="mx-auto mt-20 bg-amber-400 border-10 border-yellow-950"
                style={{ width: "420px", height: "520px" }}
            >
                <Tile
                    defaultPosition={{x: 0, y: 0}}
                    bounds={{ left: 0, top: 0, right: 420-100-20, bottom: 520-200-20 }}
                    width={100}
                    height={200}
                    bgColor="bg-yellow-800"
                />
                <Tile
                    defaultPosition={{x: 420-100-20, y: 0}}
                    bounds={{ left: 0, top: 0, right: 420-100-20, bottom: 520-200-20 }}
                    width={100}
                    height={200}
                    bgColor="bg-yellow-800"
                />
                <Tile
                    defaultPosition={{x: 0, y: 200}}
                    bounds={{ left: 0, top: 0, right: 420-100-20, bottom: 520-200-20 }}
                    width={100}
                    height={200}
                    bgColor="bg-yellow-800"
                />
                <Tile
                    defaultPosition={{x: 420-100-20, y: 200}}
                    bounds={{ left: 0, top: 0, right: 420-100-20, bottom: 520-200-20 }}
                    width={100}
                    height={200}
                    bgColor="bg-yellow-800"
                />
                <Tile
                    defaultPosition={{x: 100, y: 200}}
                    bounds={{ left: 0, top: 0, right: 420-200-20, bottom: 520-100-20 }}
                    width={200}
                    height={100}
                    bgColor="bg-yellow-800"
                />
                <Tile
                    defaultPosition={{x: 100, y: 0}}
                    bounds={{ left: 0, top: 0, right: 420-200-20, bottom: 520-200-20 }}
                    width={200}
                    height={200}
                    bgColor="bg-black"
                />
                <Tile
                    defaultPosition={{x: 0, y: 400}}
                    bounds={{ left: 0, top: 0, right: 420-100-20, bottom: 520-100-20 }}
                    width={100}
                    height={100}
                    bgColor="bg-gray-500"
                />
                <Tile
                    defaultPosition={{x: 420-100-20, y: 400}}
                    bounds={{ left: 0, top: 0, right: 420-100-20, bottom: 520-100-20 }}
                    width={100}
                    height={100}
                    bgColor="bg-gray-500"
                />
                <Tile
                    defaultPosition={{x: 100, y: 300}}
                    bounds={{ left: 0, top: 0, right: 420-100-20, bottom: 520-100-20 }}
                    width={100}
                    height={100}
                    bgColor="bg-gray-500"
                />
                <Tile
                    defaultPosition={{x: 200, y: 300}}
                    bounds={{ left: 0, top: 0, right: 420-100-20, bottom: 520-100-20 }}
                    width={100}
                    height={100}
                    bgColor="bg-gray-500"
                />
                <div className="relative bg-amber-400" style={{ width: "200px", height: "10px", left: "100px", top: "500px" }} />
            </div>
        </>
    );
}

export default App;
