import React from 'react';

import Star from './Star';

const Skills = () => {        
    return(
        <div >
        <h2 className="padStyle "><center>My Skills</center></h2>

        <div className="row">
            
            <div className="col-md-2"></div>

            <div className="col-md-4 details">
                <ul>
                    <li>HTML 5</li>
                    <li>CSS 3</li>
                    <li>JavaScript</li>
                    <li>PHP</li>
                    <li>MySQL</li>
                    <li>React</li>
                </ul>
            </div>

            <div className="col-md-4 details">
                <ul className="ratings">
                    <Star star="4"/>
                    <Star star="4"/>
                    <Star star="4"/>
                    <Star star="3"/>
                    <Star star="3"/>
                    <Star star="3"/>
                </ul>
            </div>

            <div className="col-md-2"></div>
        </div>
        </div>
    )
}

export default Skills;