import React from 'react';

function HeaderText(props) {
    const {copyright, date, explanation, title} = props.props;
    return(
        <div style={{"display":"flex", "flexDirection":"column-reverse", "paddingTop":"5rem"}}>
            <p>{date}</p>
            <p>{title}</p>
            <p>{copyright}</p>
            <p>{explanation}</p>
        </div>
    )
}

export default HeaderText;