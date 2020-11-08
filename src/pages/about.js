import React from "react"
import SEO from '../components/seo';
import MeImage from '../components/images/me'

import Layout from "../layouts/pageLayout"

import style from './about.module.css'

const IndexPage = () => (
    <Layout>
        <SEO title="About" />
        <div className={style.content}>
            <div className = { style.top }>
                <h1 className = { style.greeting }>Hi! My Name's Jacob!</h1>
                <div className={style.profilePic}>
                    <MeImage  />
                </div>
                <p className={style.intro}>
                    I'm a software developer based in good ol' KCMO.
                </p>
            </div>
           <p>
               Professionally, I'm passionate about building awesome, durable software and learning from the trailblazers that have gone before me.
               I love to collaborate and to do everything with as much excellence as I possibly can.
           </p>
           <p>
               Personally, I love Jesus, my awesome family, riding my bike, and doodling.
           </p>
        </div>
    </Layout>
)

export default IndexPage
