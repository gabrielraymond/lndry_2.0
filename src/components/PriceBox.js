import React from 'react';
import "../App.css";
import Button from './Button';

function PriceBox(props) {
    return (
        <div className="prices-1 box" >
            <h2>{props.Data.lebel}</h2>
            <h1>{props.Data.price}</h1>
            <p>{props.Data.text1}</p>
            <hr />
            <p>{props.Data.text2}</p>
            <hr />
            <p>{props.Data.text3}</p>
            <hr />
            <p>{props.Data.text4}</p>
            <Button labelBtn="Order" linkBtn="contact"/>
        </div>
    )
}

export default PriceBox;