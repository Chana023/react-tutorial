import Link from "./components/Link";
import Route from "./components/Route";
import AccordionPage from './pages/AccordionPage'
import DropdownPage from './pages/DropdownPage'

function App() {
    return (
    <div>
        <Link to="/accordion">accordion</Link>
        <Link to="/dropdown">dropdown</Link>
        <div>
            <Route path="/accordion"> 
                <AccordionPage />
            </Route>
            <Route path="/dropdown">
                <DropdownPage />
            </Route>
        </div>
    </div> );
}



export default App;