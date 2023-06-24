import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {Outlet} from "react-router-dom";

interface Layout {}

const Layout:React.FC<Layout> = () => {

    return (
        <div>
            <Header />

            <main>
                <div>
                    <Outlet/>
                </div>
            </main>

            <Footer/>
        </div>
    );
};

export default Layout;