import React from "react";

const Hero = () =>{
    return (
        <>
        <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
            <h1 className="display-5 fw-bold">A Warm Welcome</h1>
            <p className="lead mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-start">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3 ">Call to Action!</button>    
            </div>
            </div>
            <div className="col-2"></div>
            
        </div>      
        </>
    );
}

export default Hero;

