import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../Components/SharedComponents/NavBar/NavBar';

const MainLayout = () => {
    return (
        <div className='max-w-[80%] mx-auto'>
            <NavBar />
            <Outlet />
        </div>
    );
};

export default MainLayout;