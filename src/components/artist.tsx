import React from 'react';
import ImageDesign from './imageDesign';
import '../statics/home.css'
import FirstImageDesign from './firstimage';
import  artists  from '../db';
import img1 from '../images/covers/jimi_hendrix.jpg'


const Artist: React.FC = () => {
    return (<div className='artistCnt'>
        <div className='artistContent' >
            <FirstImageDesign />
            <div className='artDesc' >
                <img className='artImg' src={img1}  alt='jimi_hendrix' />
                <h4>jimi_hendrix</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum minus nostrum adipisci, dignissimos nihil voluptates sit vel perferendis eos natus quo odit repellat atque fugit blanditiis assumenda, voluptatem, nisi nesciunt!</p>
            </div>
            <div className='artImgList' >
                <img src={img1} alt='jimi_hendrix' />
                <img src={img1} alt='jimi_hendrix' />
                <img src={img1} alt='jimi_hendrix' />
                <img src={img1} alt='jimi_hendrix' />
            </div>
            </div>
        </div>
    );
};

export default Artist;