import React from "react"
import SEO from '../components/seo';

import Layout from "../layouts/pageLayout"

import style from './book.module.css'
import { Link } from "gatsby";

const IndexPage = () => (
    <Layout>
        <SEO title="About" />
        <div className={style.content}>
            <h1>Directory</h1>
            <p>I keep losing track of different pages on my site. This page is just a directory of links that I want to have an easier time navigating to.</p>
            <ul>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/cncprojectideas">CNC Project Ideas</Link></li>
            </ul>
        </div>
    </Layout>
)

export default IndexPage
