import React from "react"
import SEO from '../components/seo';

import Layout from "../layouts/pageLayout"

import style from './contact.module.css'

const IndexPage = () => (
    <Layout>
        <SEO title="About" />
        <div className={style.content}>
            <h1>Contact Me!</h1>
            <p>Got something to say? Great!<br />Send me a message!</p>
            <form className = { style.form } name="contact" method='POST' data-netlify="true">
                <input className = { style.input } type="hidden" name="form-name" value="contact" />
                <label className = { style.label } htmlFor='name'>
                    Name
                    <input className = { style.input } id='name' type='text' name='name' required />
                </label>
                <label className = { style.label } htmlFor='email'>
                    Email
                    <input className = { style.input } id='email' type='email' name='email' required />
                </label>
                <label className = { style.label } htmlFor='message'>
                    Message
                    <textarea className = { style.messageInput } id='message' name='message' resize='false' />
                </label>
                <button className = { style.submit }>Submit</button>
            </form>
        </div>
    </Layout>
)

export default IndexPage
