import React, { useState } from 'react'
import './About.css'
import { Link } from 'react-router-dom'

export const About = () => {

const [info,setInfo]=useState(false);
const openInfo=()=>{
    setInfo(!info);
}

    return (
        <>
            <div className="timerBox">
                <Link to='/'>
                    <div className="backHome">
                        <span style={{ fontSize: '70px' }}>&#8592;</span>
                    </div>
                </Link>
                    <div className="openInfo" onClick={openInfo}>
                    <span style={{fontSize:'40px'}}>&#9432;</span>

                    </div>
                <div className="boxTitle">
                    How to Use
                </div>
                {
                    info? 
                    <div className="desc">
                    The Pomodoro Technique is based on the idea that the timer creates a sense of urgency, helping to maintain focus and avoid distractions. The regular breaks also prevent burnout and fatigue. It's a simple yet effective method that encourages a balance between work and rest, fostering better time management and productivity.
                </div>
                    :

                    <div className="instructions">
                    <ol>
                        <li>
                            <p><b> Choose a Task :</b>Select a task you want to work on.</p>

                        </li>
                        <li>
                            <p><b> Set the Timer :</b>Set a timer for 25 minutes (a single Pomodoro).</p>

                        </li>
                        <li>
                            <p><b> Work on the Task :</b>Concentrate on the task at hand until the timer rings.</p>

                        </li>
                        <li>
                            <p><b> Take a Short Break :</b>Take a short break (usually 5 minutes) to relax and recharge.</p>

                        </li>
                        <li>
                            <p><b> Repeat :</b>Repeat the process. After completing four Pomodoros, take a longer break of 15-30 minutes.</p>

                        </li>
                    </ol>

                </div>
                }
            </div>
            
        </>
    )
}
