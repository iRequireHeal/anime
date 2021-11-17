import './App.css';
import {Header} from "./components/Header/Header";
import {ContentWrapper} from "./components/Content/ContentWrapper";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link,
    Outlet,
    useParams,
} from "react-router-dom";

import {HomePage} from "./pages/HomePage/HomePage";
import {AnimePage} from "./pages/AnimePage/AnimePage";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/anime" element={<AnimePage/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
