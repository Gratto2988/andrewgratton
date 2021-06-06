import React from 'react';

import Star from './Star';

const Skills = () => {        
    return(
        <div >
        <div className="navPad"></div>
        <h2 className="padStyle "><center>My Skills</center></h2>

        <div className="row">
            
            <div className="col-md-2"></div>

            <div className="col-md-8 details">
            <div className="bc padStyle details">
                <center><p>These stars are based from a personal viewpoint of my skill </p> </center>
                <table className="skillTree">
                    <tbody>
                        <tr>
                            <td>HTML 5</td>
                            <td><Star star="4"/></td>
                        </tr>
                        <tr>
                            <td>CSS 3</td>
                            <td><Star star="4"/></td>
                        </tr>
                        <tr>
                            <td>JavaScript</td>
                            <td><Star star="4"/></td>
                        </tr>
                        <tr>
                            <td>PHP</td>
                            <td><Star star="3"/></td>
                        </tr>
                        <tr>
                            <td>MySQL</td>
                            <td><Star star="4"/></td>
                        </tr>
                        <tr>
                            <td>React</td>
                            <td><Star star="3"/></td>
                        </tr>
                    </tbody>

                </table>
            </div>
            </div>

            <div className="col-md-2"></div>
        </div>
        </div>
    )
}

export default Skills;

