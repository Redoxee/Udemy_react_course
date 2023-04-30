import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard'
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';


function App()
{
    return (
        <div>
            <div className="hero is-primary">
                <div className="hero-body">
                    <p className="title">PDAs</p>
                </div>
            </div>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-3">
                            <ProfileCard handle="Toto" title= "" image={AlexaImage} description="bla blu bli"/>
                        </div>
                        <div className="column is-3">
                            <ProfileCard handle="Tata" title= "" image={CortanaImage} description="bla blip blo"/>
                        </div>
                        <div className="column is-3">
                            <ProfileCard handle="Mohamad" title= "" image={SiriImage} description="bla bland bli"/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;