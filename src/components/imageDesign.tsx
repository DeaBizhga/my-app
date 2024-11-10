// src/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface Imag{
    imglink:string;
    name:string,
    id?:number
}

const ImageDesign: React.FC<Imag> = ({imglink,name,id}) => {

    const imagePath = require(`../images/covers/${imglink}.jpg`);


    return (<Link to={`/artist/${id}`}><div className='imageCnt'>
            <img src={imagePath} />
            <h3>{name}</h3>
        </div>
        </Link> 
    );
};

export default ImageDesign;