import React from 'react'; 
import { Outlet } from 'react-router-dom';
import useRefreshToken from '../utils/useRefreshToken'; 
import Header from './Header';
import Footer from "./Footer"; 
import './Root.css'; 

const Root = () => {

    useRefreshToken(); 
    
    return (
        <div>
            <Header />

            <main>
                <Outlet />
            </main>
            
            <Footer />
        </div>
    )
}; 

export default Root; 