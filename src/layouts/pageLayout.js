import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

import style from './pageLayout.module.css';


export default ( { children } ) => {
    return <div className = { style.wrapper }>
        <Header />
        <div className = { 'layout-content ' + style.content }>
            {children}
        </div>
        <Footer />
    </div>
}