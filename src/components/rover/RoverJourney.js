import React from 'react';
import styled from 'styled-components';

import RoverStory from './RoverStory';

const RoverSteps = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   padding: 0 1rem;
`
function RoverJourney({photos}){
   console.log(photos);
   return (
    <RoverSteps>
        {
           photos.map(photo => <RoverStory story = {photo}/>)
        }
    </RoverSteps>
   )
}

export default RoverJourney;