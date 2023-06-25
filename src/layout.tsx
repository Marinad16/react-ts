import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {Outlet} from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";

interface Layout {}

const Layout:React.FC<Layout> = () => {

    return (
        <div className="main-container">
            <Sidebar/>
            <div className="wrapper">
                <Header />
                <div>
                    <Outlet/>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default Layout;