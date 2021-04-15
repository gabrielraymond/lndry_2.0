import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button(props) {
    return(
        <Link to={props.linkBtn}>
            <button className="btn">
                {props.labelBtn}
            </button>
        </Link>
    )
}

export default Button;