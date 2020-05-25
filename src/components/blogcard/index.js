import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import style from './blogcard.module.css';

export default ( {
    title,
    imageSrc,
    pagePath,
    date
}) => {
    console.log( imageSrc );
    return <div className = { style.card }>
        <div className = { style.top }>
            <div className = { style.blog_info }>
                <h2 className = { style.blog_title }>
                    <Link to={pagePath}>{title}</Link>
                </h2>
                <span>{date}</span>
            </div>
            <div className = { style.image_wrapper }>
                <Image fluid={imageSrc.childImageSharp.fluid} alt = { title } />
            </div>
        </div>
        <div className = { style.bottom }>
            <span><Link to={pagePath}>Read More</Link></span>
        </div>
    </div>
}