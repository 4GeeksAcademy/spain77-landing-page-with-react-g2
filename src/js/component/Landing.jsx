import React from "react";
import cat from "../../img/cat.gif";
export const Landing = () => {

    return (
        <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
            <button type="button" className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill" aria-label="Close"></button>
            
            <img src={cat} alt="" />
            <br />
            <button className="btn btn-primary px-5 mb-5" type="button">
                Esto es un Meme
            </button>
        </div>
    );

};