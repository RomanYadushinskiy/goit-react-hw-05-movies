import React, { Suspense } from 'react';
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";


const Layout = () => {
    return (
        <div >
            <Header />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </div>
    );
};

export default Layout

