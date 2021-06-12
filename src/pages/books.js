import React from "react"
import SEO from '../components/seo';
import MeImage from '../components/images/me'

import Layout from "../layouts/pageLayout"

import style from './book.module.css'

const books = [
    { title: 'The Holiness of God', author: 'R.C. Sproul', dateStarted: new Date( '6/20/2020' ), dateComleted: null },
    { title: 'A Long Obedience in the Same Direction', author: 'Eugene Peterson', dateStarted: new Date( '6/20/2020' ), dateComleted: null },
    { title: 'The Bell Jar', author: 'Sylvia Plath', dateStarted: new Date( '6/20/2020' ), dateComleted: new Date( '12/27/2020' ) },
    { title: 'Dune', author: 'Frank Herbert', dateStarted: new Date('12/26/2020'), dateComleted: new Date( '5/15/2021') },
    { title: 'Effortless: Make It Easier to Do What Matters Most', author: 'Greg Mckeown', dateStarted: null, dateComleted: null },
    { title: 'Gentle and Lowly', author: 'Ray Ortlund', dateStarted: null, dateComleted: null },
    { title: 'Escaping the Build Trap', author: 'Melissa Perri', dateStarted: null, dateComleted: null },

    { title: 'The Body Keeps the Score', author: 'Bessel Van Der Kolk', dateStarted: null, dateComleted: null },
    { title: 'Sir Gawain and the Green Knight', author: '???', dateStarted: new Date( '5/15/2021'), dateComleted: null },
    { title: 'Run With the Horses', author: 'Eugene Peterson', dateStarted: null, dateComleted: null },
    { title: 'Water Buffalo Theology', author: 'Kosuke Koyama', dateStarted: null, dateComleted: null },
];

const isBookStarted = book => book.dateStarted;
const isBookFinished = book => book.dateComleted;

const isBookInProgress = book => isBookStarted( book ) && !isBookFinished( book );
const isBookNotStarted = book => !isBookStarted( book );

const BookListItem = ( {book} ) => {
    return <li>{book.title}</li>
}

const IndexPage = () => (
    <Layout>
        <SEO title="About" />
        <div className={style.content}>
            <h1>Books</h1>
            <div className = {style.listWrapper}>
                <div>
                    <h2 className={style.bookListCateogry}>Wish List</h2>
                    <ul className={style.bookList}>
                        {books.filter(isBookNotStarted).map(book => <BookListItem book={book} />)}
                    </ul>
                </div>
                
                <div>
                    <h2 className={ style.bookListCateogry}>In Progress</h2>
                    <ul className={style.bookList}>
                        {books.filter(isBookInProgress).map(book => <BookListItem book={book} />)}
                    </ul>
                </div>
                
                <div>
                    <h2 className={style.bookListCateogry}>Completed</h2>
                    <ul className={style.bookList}>
                        {books.filter(isBookFinished).map(book => <BookListItem book={book} />)}
                    </ul>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
