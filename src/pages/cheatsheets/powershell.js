import React from "react"
import SEO from '../../components/seo';

import Layout from "../../layouts/pageLayout"

const Tip = ({ title, children } ) => {
    return <div>
        <h3>{title}</h3>
        <pre style={{whiteSpace: 'pre-wrap'}}>
            {children}
        </pre>
    </div>
}

const IndexPage = () => (
    <Layout>
        <SEO title="Powershell Cheatsheet" />
        <div style={{margin: 'auto', width: 800}}>
            <h1>Cheatsheet: Powershell</h1>
            <p>This is a cheatsheet with very basic powershell syntax, tips, and recipes.</p>
            <p>This is not meant to be a tutorial or explanation of anything. It is simply a reference for my own and others benefit.</p>
            <div>
                <h2>Tips</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '50% 50%', gap: '20px'}}>
                    <Tip title='Array'>
                        {`$fruits = @( 'apple', 'orange', 'grapes' )
$fruits[0]  # apple

# if you have an array of objects that contain methods you can execute the method on the array itself and it will map it over the elements
                    `}
                    </Tip>
                    <Tip title='Map'>
                        {`$person = [PSCustomObject]@{
    FirstName = "Phillip";
    MiddleInitial = "J";
    LastName = "Fry";
    Company = "Planet Express";
    Job = "Delivery Boy";
}

# You dont have to use [PSCustomObject] to create some sort of map
# but powershell seems to handle it much better this way
`}
                    </Tip>
                    <Tip title="Navigation">
                        {`# same as cmd
cd c:/

# use pushd/popd when moving back and forth across folders to keep you from having to repeat file paths

cd c:/my-project

pushd scripts
# now we are in c:/my-project/scripts

# do whatever you need to: run a script, execute more commands, etc...

popd
# now we are back in c:/my-project

`}
                    </Tip>
                </div>
            </div>
            <div>
                <h2>Recipes</h2>
                <div>
                    <Tip title='Search for files'>
                        Get-ChildItem -Recurse -Path ./ -Filter *.js
                </Tip>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
