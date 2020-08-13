import React from "react"
import SEO from '../components/seo';
import MeImage from '../components/images/me'

import Layout from "../layouts/pageLayout"

import style from './about.module.css'

const IndexPage = () => (
    <Layout>
        <SEO title="About" />
        <div className={style.content}>
            <h1>CNC Project Ideas</h1>
            <p>
                I recently bought a CNC machine (specifically a <a href="https://www.inventables.com/technologies/x-carve">X-Carve</a>). This page
                will serve as a repository for saving some of the different ideas I come up with and would like to try out at some point.
            </p>
            <ul>
                <li>Alphabet letter boomerangs</li>
                <li>Wave pattern coasters</li>
                <li>Dymaxion map Risk board</li>
                <li>Inlay cuttingboard</li>
                <li>Clip-art cut-outs</li>
            </ul>
        </div>
    </Layout>
)

export default IndexPage
