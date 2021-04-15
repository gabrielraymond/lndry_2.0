import React from 'react';
import "../App.css";
import PriceBox from './PriceBox';
import { objDataPriceBox } from "./Data";

function PriceSection() {
    return (
        <div id="prices">
            <div className="wrapper">
                <h1>Our Prices</h1>
                <div className="prices display-set">
                    {objDataPriceBox.map((DataPriceBox) => 
                        <PriceBox  Data={DataPriceBox} key={DataPriceBox.id} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default PriceSection;
