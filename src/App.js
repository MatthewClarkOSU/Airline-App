import "./styles.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./pages/Home"

export default function App() {
    return (
        <Router>
        <div className="App">
            <Route path="/" component={Home} exact />
        </div>
        </Router>
    );
}