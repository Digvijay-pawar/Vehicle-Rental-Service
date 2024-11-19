import React from "react";
import SearchFilter from "./SearchFilter";

function Hero() {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(images/bg_2.jpg)",
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md w-full">
                    <SearchFilter />
                </div>
            </div>
        </div>
    );
}

export default Hero;
