import './App.css';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
} from "react-router-dom";

import {HomePage} from "./pages/HomePage";
import {AnimePage} from "./pages/AnimePage";
import {GenresPage} from "./pages/GenresPage";
import {ListByGenres} from "./components/listByGenres/ListByGenres";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/genres" element={<GenresPage/>}>
                        <Route path=":genre" element={<ListByGenres/>}/>
                    </Route>
                    <Route path={`anime/:id`} element={<AnimePage/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
