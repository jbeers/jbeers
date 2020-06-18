import React from "react"
import SEO from '../../components/seo';

import Timer from './Timer'

import styles from './workout.module.css';

let rest = false;
const handleTimerComplete = reset => {
    reset(rest ? 30 : 3);
    rest = !rest;
}


const Page = () => (
    <>
        <SEO title="Workout" />
        <div className = { styles.workout_wrapper } >
            <div className = { styles.workout }>
                <h1>Round 1</h1>
                <ul>
                    <li>Split Squat (R+L)</li>
                    <li>Elbow Plank</li>
                    <li>Hip Thrust</li>
                    <li>Inch Worm Pushups</li>
                </ul>

                <h1>Round 2</h1>
                <ul>
                    <li>Rear Foot Elevated Split Squats (R+L)</li>
                    <li>Plank Pushup</li>
                    <li>Hip Thrust March</li>
                    <li>Hand Release Pushups</li>
                </ul>

                <h1>Round 3</h1>
                <ul>
                    <li>Rear Foot Elevated Split Jump Squat (R+L)</li>
                    <li>Elevated Plank Shoulder Taps</li>
                    <li>Single-Leg Hip Thrusts (R+L)</li>
                    <li>Iso Plyo Pushups</li>
                </ul>
            </div>
            <Timer seconds={10} onTimerComplete={handleTimerComplete} />
        </div>
    </>
)

export default Page
