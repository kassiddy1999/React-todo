import React from 'react';
import Rainbow from './hoc/Rainbow';

 const About = () => {
    return (
        <div className =  "container">
            <h4 className = "center">About</h4>
            <p>welcome to this amazing website where all things are made possible bringing your imagination into reality this is where every imagination is a domination</p>
        </div>
    )
}

export default Rainbow(About)