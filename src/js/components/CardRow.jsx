
import React from "react";
import Card from "./Card";

const CardRow = () =>{
    return (
        <div className="row" >
            <div className="col-2"></div>
            <div className="col-8 d-flex justify-content-around" >
            <Card /> <Card /> <Card /> <Card />
            </div>
            <div className="col-2"></div>
        </div>
    );
}

export default CardRow;
