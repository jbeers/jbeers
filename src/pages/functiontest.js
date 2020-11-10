import React, { useState } from "react"



const IndexPage = () => {
    const[ resJSON, setResJSON ] = useState( { info: 'Hit the button!' } );

    const handleClick = async () => {
        const res = await fetch( 'https://jbeers.netlify.app/.netlify/functions/random' );
        window.a = res;
        console.log( 'it worked!' );
        const json = await res.json();
        console.log( json );
        setResJSON( json );
    }
    return <div>
        <button onClick = { handleClick }>Click me!</button>
        <pre>{JSON.stringify( resJSON, null, 2 ) } </pre>
    </div>
}

export default IndexPage
