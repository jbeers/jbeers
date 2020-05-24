import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { FaBars } from '../icons';
import Menu from '../menu';

import style from './header.module.css';

export default () => {
    const [ menuVisible, setMenuVisible ] = useState( false );

    useEffect( () => {
        window.addEventListener( 'scroll', () => {
            const header = document.querySelector( 'header' );

            if (window.pageYOffset > header.offsetTop) {
                header.classList.add( style.sticky );
                header.nextSibling.style.setProperty( 'padding-top', header.getBoundingClientRect().height + 'px' );
            } else {
                header.classList.remove( style.sticky );
                header.nextSibling.style.removeProperty( 'padding-top' );
            }
        });
    }, [] );

    return <header className = { style.header }>
        <h1 className={style.title}>
            <Link to="/" className={style.link}>
                Jacob Beers
            </Link>
        </h1>
        <nav className = { style.nav }>
            <ul className={style.items}>
                <li><Link className={style.link} to="/">Home</Link></li>
                <li><Link className={style.link} to="/about">About</Link></li>
                <li><Link className={style.link} to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <FaBars className={style.menuIcon } onClick = { () => setMenuVisible( !menuVisible ) } />
        <Menu visible = { menuVisible } onCloseClick = { () => setMenuVisible( false ) } />
    </header>
}