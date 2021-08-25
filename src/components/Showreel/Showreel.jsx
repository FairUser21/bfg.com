import React from 'react';
import video from '../../Assets/video.mp4'
import './Showreel.css';

const Showreel = () => {
    return (
        <div className="showReelContainer">
                <div class="vid">
                    <video autoPlay loop id="video" className="video">
                        <source src={video} type="video/mp4"/>
                        
                    </video>
                    {/* <div className="showText">
                        <img src={logo} alt="" />
                        <p>«Жизнь — как вождение велосипеда. Чтобы сохранить равновесие, ты должен двигаться»
                             —Альберт Эйнштейн, физик-теоретик.</p>
                    </div> */}
                </div>
            
        </div>
    );
};
 
export default Showreel;