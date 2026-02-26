export const PuzzleBox = {
    Colors: {
        bg: "bg-amber-400",
        border: "border-yellow-950",
    },
    Dimensions: {
        borderWidth: 10,
        width: 400,
        height: 500
    }
}

const Tiles = {
    Vertical: {
        Colors: {
            bg: "bg-yellow-800",
            border: "border-amber-400"
        },
        Dimensions: {
            width: PuzzleBox.Dimensions.width / 4,
            height: PuzzleBox.Dimensions.height / 2.5
        }
    },
    Horizontal: {
        Colors: {
            bg: "bg-yellow-800",
            border: "border-amber-400"
        },
        Dimensions: {
            width: PuzzleBox.Dimensions.width / 2,
            height: PuzzleBox.Dimensions.height / 5
        }
    },
    Square: {
        Colors: {
            bg: "bg-gray-500",
            border: "border-amber-400"
        },
        Dimensions: {
            width: PuzzleBox.Dimensions.width / 4,
            height: PuzzleBox.Dimensions.height / 5
        }
    },
    Goal: {
        Colors: {
            bg: "bg-black",
            border: "border-amber-400"
        },
        Dimensions: {
            width: PuzzleBox.Dimensions.width / 2,
            height: PuzzleBox.Dimensions.height / 2.5
        }
    }
}

export const StartConfig = [
    {
        type: Tiles.Vertical,
        position: { x: 0, y: 0 }
    },
    {
        type: Tiles.Vertical,
        position: { x: PuzzleBox.Dimensions.width - Tiles.Vertical.Dimensions.width, y: 0 }
    },
    {
        type: Tiles.Vertical,
        position: { x: 0, y: Tiles.Vertical.Dimensions.height }
    },
    {
        type: Tiles.Vertical,
        position: { x: PuzzleBox.Dimensions.width - Tiles.Vertical.Dimensions.width, y: Tiles.Vertical.Dimensions.height }
    },
    {
        type: Tiles.Horizontal,
        position: { x: Tiles.Vertical.Dimensions.width, y: Tiles.Vertical.Dimensions.height }
    },
    {
        type: Tiles.Goal,
        position: { x: Tiles.Vertical.Dimensions.width, y: 0 }
    },
    {
        type: Tiles.Square,
        position: { x: 0, y: Tiles.Vertical.Dimensions.height * 2 }
    },
    {
        type: Tiles.Square,
        position: { x: PuzzleBox.Dimensions.width - Tiles.Square.Dimensions.width, y: Tiles.Vertical.Dimensions.height * 2 }
    },
    {
        type: Tiles.Square,
        position: { x: Tiles.Vertical.Dimensions.width, y: Tiles.Goal.Dimensions.height + Tiles.Horizontal.Dimensions.height }
    },
    {
        type: Tiles.Square,
        position: { x: PuzzleBox.Dimensions.width - Tiles.Vertical.Dimensions.width - Tiles.Square.Dimensions.width, y: Tiles.Goal.Dimensions.height + Tiles.Horizontal.Dimensions.height }
    }
];
