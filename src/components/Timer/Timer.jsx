import React, { useEffect } from 'react'
import { useState } from 'react'
import click from '../../assets/sounds/clicksound.mp3'
import timeUp from '../../assets/sounds/timeUp.wav'
import './Timer.css'
export const Timer = () => {

    const [chosenTimer,setChosenTimer]= useState(25);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMintues] = useState(chosenTimer);

    var timer;
    const [start, setStart] = useState(false);
    const startTimer = () => {
        setStart(!start);
    }
    const restart=()=>{
    setStart(false);
    setMintues(chosenTimer);
    setSeconds(0);
    }

    const changeTimer=()=>{
        if(chosenTimer===25){
            setChosenTimer(5);
            setMintues(5);
            setSeconds(0);
            setStart(false);
        }
        else{
            setChosenTimer(25);
            setMintues(25);
            setSeconds(0);
            setStart(false);
        }
    }
    const changeTimer2=()=>{
        if(chosenTimer===25){
            setChosenTimer(15);
            setMintues(15);
            setSeconds(0);
            setStart(false);
        }
        else{
            setChosenTimer(25);
            setMintues(25);
            setSeconds(0);
            setStart(false);
        }
    }

    useEffect(() => {

        if (minutes === 0 && seconds === 0) {
            setStart(false);
            playTimeUp();
            changeTimer();
        }

        if (start === true) {
            timer = setInterval(() => {

                if (seconds === 0) {
                    setSeconds(59);
                    setMintues(minutes - 1);
                }
                else {
                    setSeconds(seconds - 1);
                }
            }, 1000);

            return () => {
                clearInterval(timer);
            }
        }
    })
    
    const playClick=()=>{
        new Audio(click).play();
    }
    const playTimeUp=()=>{
        new Audio(timeUp).play();
    }
    return (
        <>
            
            <div className="timerBox">
                <div className="boxTitle">
                    {chosenTimer===25?"FOCUS !":""}
                    {chosenTimer===5?"CHILL :)":""}
                    {chosenTimer===15?"LONG BREAK":""}
                </div>
                <div className="time">
                    {minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}
                </div>
                <div className="start" onClick={()=>{startTimer();playClick()}}>
                    {start !== true ? "START" : "PAUSE"}
                </div>
                <div className="restartIcon" onClick={()=>{restart();playClick()}}>
                <span style={{ fontSize: '45px' }}>&#8634;</span>
                 </div>
            </div>

            <div className="anotherTimer" onClick={()=>{changeTimer();playClick()}}>
             <div className="anotherTime">
                {chosenTimer===25 || chosenTimer===15?"05:00":"25:00"}
             </div>
            </div>
            <div className="anotherTimer2" onClick={()=>{changeTimer2();playClick()}}>
             <div className="anotherTime">
                {chosenTimer===25 || chosenTimer===5?"15:00":"25:00"}
             </div>
            </div>
        </>
    )
}
