import React from 'react';
import RoverStory from './RoverStory'

function RoverJourney({photos}){
   console.log(photos);
   return (
    <div>
        {
           photos.map(photo => <RoverStory story = {photo}/>)
        }
    </div>
   )
}

export default RoverJourney;