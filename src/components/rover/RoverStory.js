import React from 'react';
import styled from 'styled-components';

const Story = styled.div`
    border: .2rem solid dodgerblue;
    width: 30%;
    /* height: 30rem; */
    margin: 3rem 1.2rem;
    padding-top: 3rem;
    border-radius: 3rem;

    img {
        width: 25rem;
        height: 25rem;
        margin-top: 5rem;
        border-radius: 3rem;
        margin: 0 auto;
    }
`

const ColoredP = styled.p`
    color: ${rover => rover.status === 'active' ? 'green' : 'red'};
`

function RoverStory({story}){
   const {img_src, earth_date, rover} = story;
   console.log(rover.status);
   
   return (
    <Story>
        <img alt = "Story" src={img_src}/>
        <p>Photo taken on {earth_date}</p>
        <p>Mars Rover name: {rover.name}</p>
        <p>Launched on {rover.launch_date}</p>
        <p>Landed on {rover.landing_date}</p>
        <ColoredP>Status: {rover.status}</ColoredP>
    </Story>
   )
}

export default RoverStory;