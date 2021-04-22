import React from "react";
import useAuth from "./useAuth";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Dashboard = ({ code }) => {
    const accessToken = useAuth(code);
    return (
        <div>
            <Navbar />
            <h1>Dashboard</h1>
        </div>
    );
};

export default Dashboard;
