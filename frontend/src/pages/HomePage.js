import React from 'react';
import '../../src/styles/components/pages/homepage.css';

const HomePage = (props) => {
    return (
        <div id='hope'>
            <h1>Esta sera mi Homepage</h1>
            <video id='video' muted autoPlay src='images/video.mp4'></video>
        </div>
        
    );
}
export default HomePage;