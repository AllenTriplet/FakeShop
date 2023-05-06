import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="ui fixed menu">
            <div className="ui container center">
                <Link to ="/product/4">
                <h2>Fakeshop</h2>
                </Link>
            </div>
        </div>
    )
};
export default Header;