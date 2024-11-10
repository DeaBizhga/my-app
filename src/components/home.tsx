import React from 'react';
import ImageDesign from './imageDesign';
import '../statics/home.css'
import FirstImageDesign from './firstimage';
import  artists  from '../db';

const Home: React.FC = () => {
    return (<div className='homeCnt'>
        <div className='homeContent' >
            <FirstImageDesign />
            {artists.map(item=>{
                return(
                    <ImageDesign imglink={item.cover} name={item.name} id={item.id} />
                )
            })}
            </div>
        </div>
    );
};

export default Home;
