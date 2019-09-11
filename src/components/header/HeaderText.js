import React from 'react';

function HeaderText(props) {
    const {copyright, date, explanation, title} = props.props;
    return(
        <div>
            <p>{date}</p>
            <p>{title}</p>
            <p>{copyright}</p>
            <p>{explanation}</p>
        </div>
    )
}

export default HeaderText;