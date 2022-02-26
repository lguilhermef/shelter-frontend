import React from "react";
import { Link } from "react-router-dom";

const MainPage: React.FC = () => {
    return (
        <div className="App">
            <header>
                Header
                <Link to={"/add-shelter"}>
                    <button className="headerButton">Add Shlter</button>
                </Link>
            </header>
            Main Page
        </div>
    )
};

export default MainPage;