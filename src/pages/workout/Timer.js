import React, { useState, useEffect, useRef } from 'react';
import styles from './timer.module.css';
import beepWav from './beep.wav';
import completeWav from './success.wav';

let beepSound = null;
let completeSound = null;

const Timer = ({ seconds, onTimerComplete }) => {
    const [timer, setTimer] = useState(seconds);
    const [remainingSeconds, setRemainingSeconds] = useState(seconds);
    const [dashLen, setDashLen] = useState( 1000 );
    const [dashOffset, setDashOffset] = useState( 0 );
    const pathRef = useRef( null );
    const [ done, setDone ] = useState( false );

    // const [ beepSound, setBeepSound ] = useState( null );

    useEffect( () => {
        if (!beepSound) beepSound = new Audio( beepWav );
        if (!completeSound) completeSound = new Audio(completeWav );
    }, [] );

    const reset = ( time ) => {
        setTimer( time );
        setRemainingSeconds( time );
        setDone( false );
        setDashOffset(0);
    }

    useEffect( () => {
        const id = setInterval( () => {
            if( done ){
                return;
            }

            const length = pathRef.current.getTotalLength();
            setDashLen( length );
            
            if( remainingSeconds === 0 ){
                setDashOffset(length);
                setDone( true );
                if (completeSound) completeSound.play();
                onTimerComplete( reset );
                return;
            }

            const remainingTime = remainingSeconds - 1;
            if ( beepSound && timer >= 5 && remainingTime <= 5 ) beepSound.play();

            setDashOffset( length - ( length * ( ( remainingTime / timer ) ) ) );
            setRemainingSeconds( remainingTime );
        }, 1000 );

        return () => {
            clearInterval( id );
        };
    }, [done, remainingSeconds, beepSound, timer ] );

    return <div style={{ width: '300px', height: '300px' }}>
        <svg viewBox='0 0 100 100' width='100%' height='100%' xmlns="http://www.w3.org/2000/svg">
            <circle
                className={ styles.timer + ' ' + styles.timer_bg }
                cx='50'
                cy='50'
                r='40'
            ></circle>
            <circle
                className = { styles.timer }
                cx='50'
                cy='50'
                r='40'
                ref = { pathRef }
                style={{ strokeDashoffset: dashOffset, strokeDasharray: dashLen }}
            ></circle>
            <text x='50' y='50' className = { styles.timer_text}>
                {remainingSeconds}
            </text>
        </svg>
    </div>
}

export default Timer;