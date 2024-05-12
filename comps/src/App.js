import Button from "./Button";
import {GoBell , GoCloudDownload, GoDatabase} from 'react-icons/go'

function App() {
    
    return <div>
        <div>
            <Button secondary outline>
                <GoBell />
                Click here!
            </Button>
        </div>
        <div>
            <Button success outline>
                < GoCloudDownload />
                Buy now
            </Button>
        </div>
        <div>
            <Button warning>
                <GoDatabase/>
                See deal
            </Button>
        </div>
        <div>
            <Button danger>Stuff</Button>
        </div>
        <div>
            <Button primary>Random</Button>
        </div>
    </div>;
}

export default App;