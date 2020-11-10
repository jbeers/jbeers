import React from "react"



const IndexPage = () => {

    const handleClick = async () => {
        const res = await fetch( 'https://jbeers.netlify.app/.netlify/functions/random' );
        window.a = res;
        console.log( 'it worked!' );
        console.log( await res.json() );
    }
    return <div>
        <button onClick = { handleClick }>Click me!</button>
    </div>
}

export default IndexPage
