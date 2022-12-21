import AnimatedBackground from "../components/animated-background";
import '../styles/main.scss'



function App() {
    return (
        <div className="main-wrapper">
            <div className="info-wrapper">
                <div className="name">Muslim RAGIMOV</div>
                <div className="position">Front-end Developer</div>
                <div className="description">
                    I am React.js and React Native developer with over 3 years of development practice. My expertise is building high-quality Web and Mobiles Applications using React.js and React Native Framework.
                    <div>I am always open to new ideas and like solving challenges.</div>
                    <div>Don’t hesitate to contact me regardless of the project complexity you need!</div>
                </div>
            </div>
            <AnimatedBackground />
        </div>

    );
}

export default App;
