import React from 'react';
import HeaderImage from './HeaderImage';
import HeaderText from './HeaderText';

function Header({headerData}) {
    
    return(
        <div className="App-header">
            <HeaderText props={headerData}/>
            <HeaderImage src = {headerData.url} />
        </div>
    );
}

export default Header;