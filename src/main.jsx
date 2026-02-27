import "./index.css";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { GameEngineProvider } from "./context/gameEngine.jsx";
import App from "./App.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <GameEngineProvider>
            <App/>
        </GameEngineProvider>
    </StrictMode>,
);
