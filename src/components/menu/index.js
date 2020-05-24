import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import { FaTimes } from '../icons';

import style from './menu.module.css';

const lockScrolling = () => {
    const html = document.querySelector( 'html' );

    html.style.setProperty( 'overflow', 'hidden' );
}

const unlockScrolling = () => {
    const html = document.querySelector( 'html' );

    html.style.removeProperty('overflow');
}

export default ( { visible = false, onCloseClick }) => {

    useEffect( () => {
        const layoutDiv = document.querySelector( '.layout-content' );

        if( !visible ){
            layoutDiv.style.removeProperty( 'filter' );
            unlockScrolling();
            return;
        }
        
        layoutDiv.style.setProperty('filter', 'blur(2px)');
        lockScrolling();
        
    }, [ visible ] )
    
    return <div style = {{ display: !visible ? 'none' : 'block' }} className = { style.menuWrapper }>
        <div className = { style.cover } />
        <div className={style.menu}>
            <span className={style.menuIcon}>
                <FaTimes onClick={onCloseClick }/>
            </span>
            <ul className={style.items}>
                <li><Link className = { style.link } to="/">Home</Link></li>
                <li><Link className = { style.link } to="/about">About</Link></li>
                <li><Link className = { style.link } to="/contact">Contact</Link></li>
            </ul>
        </div>
        {/* <div className = { style.menuControl }>
            <span>Lefty</span>
            <span>Aware!</span>
        </div> */}
    </div>
}