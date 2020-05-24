import React from 'react';

export default () => {
    return <svg width='200' height='100' viewBox='0 0 100 100' xmlns="http://www.w3.org/2000/svg">
        <defs>
            <marker id="arrow" viewBox="0 0 20 20" refX="0" refY="5"
                markerWidth="50" markerHeight="50"
                orient="auto">
                <path fill = "none" stroke ="black" d="m 0 5 a 5 5 180 1 1 10 0 a 5 5 0 1 0 10 0" />
            </marker>
            <pattern
                id='s'
                viewBox="0 0 20 20"
                width="25%"
                height="100%"
            >
                <path fill="none" stroke="black" d="m 0 5 a 5 5 180 1 1 10 0 a 5 5 0 1 0 10 0" />
            </pattern>
        </defs>
        {/* <rect
            x="0"
            y="50"
            width='100'
            height='100'
            fill="url(#s)"
        >


        </rect> */}
            <path d="m -50 50 h 50 50 50 50"
                stroke = "none"
                marker-start="url(#arrow)"
                marker-mid="url(#arrow)"
                marker-end="url(#arrow)"
            />

        {/* <path d="M40 50 60 59.57 80 67.68 100 73.1 120 75 140 73.1 160 67.68 180 59.57 200 50 220 40.43 240 32.32 260 26.9 280 25 300 26.9 320 32.32 340 40.43 360 50"
            fill="none" stroke="none"
            marker-start="url(#arrow)"
            marker-mid="url(#arrow)"
            marker-end="url(#arrow)" /> */}
    </svg>
}