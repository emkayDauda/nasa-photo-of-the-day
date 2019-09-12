import React from 'react';

function RoverStory(props){
   const {img_src, earth_date, rover} = props.story;
   console.log(props);
   return (
    <div className="story">
        <img alt = "Story" src={img_src}/>
        <p>{earth_date}</p>
        <p>{rover.name}</p>
    </div>
   )
}

export default RoverStory;