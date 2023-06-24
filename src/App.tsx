import {Routes, Route, BrowserRouter} from "react-router-dom";
import PushPage from "./pages/push/push";
import React from "react";
import Layout from "./layout";

interface AppProps {
}

const App: React.FC<AppProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    {/*<Route index element={<HomePage />} />*/}
                    <Route path="/push" element={<PushPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
