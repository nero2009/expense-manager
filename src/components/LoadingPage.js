import React from 'react';

const LoadingPage = () => {
    return (
        <div className="container">
            <div className="circle lg">
            <div className="circle md">
                <div className="circle sm">
                <div className="circle smlr">
                </div>
                </div>
            </div>
            </div>
            <span id="loading">Loading...</span>
        </div>
    )
}

export default LoadingPage;