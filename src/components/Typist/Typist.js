import React from 'react';
import Type from 'react-typist';

const Typist = () => {
    return (
        <div className="header-typist">
            <Type>
            <span > It's time to get your expenses under control </span>
                <Type.Backspace count={33} delay={400} />
            <span> track your expenses </span>
            <Type.Delay ms={500} />
            <br/>
            Stay organized and live your best life.
           
            </Type>
        </div>
    );
};

export default Typist;