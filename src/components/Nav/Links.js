import React from 'react';

function Links({onDateChanged}){
    return (
        <div className="links">

        <input type="date" onChange={(newDate) => {
            console.log(newDate)
            // onDateChanged(newDate)
        }}/>
        <a href="#" className="App-link">Home</a>
        <a href="#" className="App-link">About Us</a>
        <a href="#" className="App-link">Careers</a>
        <a href="#" className="App-link">Donate</a>
    </div>
    )
}

export default Links;