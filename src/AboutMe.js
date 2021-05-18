import me from './AG.png';
const AboutMe = () => {
    return(
        <div id="aboutme">
            <div className="padStyle">
                <h2 className="text-center">About me!</h2>
                <p className="text-center">I'm a Web Developer</p>
            </div>
            
            <div className="row">
                <div className="col-md-2 "></div>
                
                <div className="col-md-3 details">
                    <h3 className="text-center">About me</h3>
                    <p>I am an Enthusiastic and self-motivated individual with a high 
                        interest in IT Systems and Programming Languages, Basically anything 
                        to do with computers. I’m a quick learner and adapt well to working environments.
                        I have a “can do” attitude and always aim to do the best of my abilities. 
                        Working in IT is all I want to do in life as I enjoy learning new skills 
                        and gaining new knowledge. I'm a non Smoker and have a Full UK Driving Licence.
                    </p>
                </div>

                <div className="col-md-2 details">
                    <center>
                        <img src={me} alt="Profile Pic" className="profilePic"/>
                    </center>
                </div> 

                <div className="col-md-3 details">
                    <h3 className="text-center ">Details</h3>
                    <p><strong>Name:</strong></p>
                        <p>Andrew Gratton</p>
                    <p><strong>Age:</strong></p>
                        <p>32</p>
                    <p><strong>Location:</strong></p>
                        <p>Staffordshire, England</p>
                </div>
                
                <div className="col-md-2 "></div>
            </div>

        </div> 
    )
}
export default AboutMe;

