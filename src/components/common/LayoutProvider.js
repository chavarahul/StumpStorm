import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from './header';
import Footer from './footer';

const LayoutProvider = ({ children }) => {
    const location = useLocation();

    return (
        <>
            {(location.pathname !== '/form'  && location.pathname !== '/login' && location.pathname !== '/register' ) && <Header />}
            {children}
            {(location.pathname !== '/form' && location.pathname !== '/register' && location.pathname !== '/login'  ) && <Footer />}
        </>
    )
}

export default LayoutProvider