import React from 'react';
import { Link } from 'react-router-dom';
import imglink from '../images/raw/Girls-Listen-Music_0.jpg'
import '../statics/home.css'



const FirstImageDesign: React.FC = () => {
    return (<div className='imageFirsCnt'>
            <img src={imglink} />
            <h3>Music DB</h3>
        </div>
    );
};

export default FirstImageDesign;