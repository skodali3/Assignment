import React from "react";


function Navigationbar() {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img src={require("./logo.jpeg")} width="50" height="50" class="d-inline-block align-top" alt="" />
                    Media Library
                </a>
        </nav>
    );
}

export default Navigationbar;