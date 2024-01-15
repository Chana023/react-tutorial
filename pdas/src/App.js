import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
import 'bulma/css/bulma.css'

function App() {
    return (
        <div>
            <div>Personal digital Assistants</div>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className=" column is-3">
                            <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage}/>
                        </div>
                        <div className=" column is-3">
                            <ProfileCard title="Cortana" handle="@cortana99" image={CortanaImage}/>
                        </div>
                        <div className=" column is-3">
                            <ProfileCard title="Siri" handle="@siri99" image={SiriImage}/>
                        </div>

                    </div>

                </section>
            </div>
            
            
            
        </div>
    );
}

export default App;