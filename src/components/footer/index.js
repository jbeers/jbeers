import React from 'react';
import { Link } from "gatsby";
import style from './footer.module.css';

export default () => {
    return <div className = { style.footer }>
        <p className = { style.text }>This is the bottom!</p>
        <ul className = { style.links }>
            <li><Link to="/" className = { style.link }>Home</Link></li>
            <li>|</li>
            <li><Link to="/about" className = { style.link }>About</Link></li>
            <li>|</li>
            <li><Link to="/contact" className = { style.link }>Contact</Link></li>
        </ul>
    </div>
}