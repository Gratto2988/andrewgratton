import star from './star';

const Skills = () => {
    return(
        <div>
        <h2 className="padStyle"><center>My Skills</center></h2>
        <div className="row">
            
            <div className="col-md-2"></div>
            <div className="col-md-4">
            
             <ul>
                 <li>HTML 5</li>
                 <li>CSS 3</li>
                 <li>JavaScript</li>
                 <li>PHP</li>
                 <li>MySQL</li>
                 <li>React</li>
             </ul>
            </div>
            <div className="col-md-4">
                <ul id="ratings">
                    {star()}
                </ul>
            </div>
            <div className="col-md-2"></div>

             <p>Star icon: <span className="glyphicon glyphicon-star"></span></p>        
        </div>
        </div>
    )
}

export default Skills;