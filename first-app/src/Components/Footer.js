import React from 'react';
import Items from './Items';

function Footer(props) {
    return (
    <>
    <h1>
    This is {props.item}!
    </h1>       
    <div>
        <Items/>
    </div>

    </>
    );
}

export default Footer;