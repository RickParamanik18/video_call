import "./App.css";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Meet from "./pages/Meet";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Index/>} />
                <Route path="/:meetId" element={<Meet/>} />
                <Route path="/*" element={<h1>404</h1>} />
            </Routes>
        </>
    );
}

export default App;
