import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';
 
const ImageList = (props) => {  //receive images from the parent
   const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image}/>
   })
    
return <div className="image-list">{images}</div>
};

export default ImageList;