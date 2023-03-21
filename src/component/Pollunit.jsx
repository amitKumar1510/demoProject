import React from "react";
import pollunit from "../pollunit.css";
import axios from 'axios';

export default function Pollunit(props){
    const [shouldRender, setShouldRender] = React.useState(false);
    const [currentTime, setCurrentTime] = React.useState(0);

    async function fetchTime() {
        const response = await axios.get(
            "https://worldtimeapi.org/api/timezone/Asia/Kolkata"
        );
        const Time = response.data.unixtime;
        setCurrentTime(Time);
        console.log(currentTime, "-", props.poll.st.seconds, "-", props.poll.et.seconds);
        test();
    }

    async function test() {
        if(currentTime !== 0){
            if (props.poll.st.seconds <= currentTime && currentTime <= props.poll.et.seconds) {
                setShouldRender(true);
                console.log(Math.floor((props.poll.et.seconds-currentTime)/3600));
            }
        }
    }

    React.useEffect(() => {
        fetchTime();
    }, [currentTime, props.poll.st.seconds]);

    return shouldRender ? (
        <div className="pollunit__maindiv">
            <p className="pollunit__p1">
                Poll Name : {props.poll.pname}
            </p>
            <p className="pollunit__p2">
                Poll Id : {props.poll.pid}
            </p>
            <p className="pollunit__p3">
                Eligible Students For Vote : {props.poll.eligibility}
            </p>
            <p className="pollunit__p4">
                Discription : {props.poll.pinfo}
            </p>
           <p className="pollunit__p5">
                Time left : {Math.floor((props.poll.et.seconds-currentTime)/3600)} hours.
            </p>
        </div>
    ) : (
        <div></div>
    );
}
