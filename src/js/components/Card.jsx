import React from "react";

const Card = () =>{
    return (
        <>
        <div className="card" style={{width: "12rem"}}>
        <img src="https://picsum.photos/id/237/200/300" className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Find Out More</a>
        </div>
        </div>
        </>
    );
}

export default Card;
