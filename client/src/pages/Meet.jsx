import { useEffect, useRef } from "react";
import MeetBtn from "../components/MeetBtn";
import Attendee from "../components/attendee";
import styles from "../styles/meet.module.css";
import { getVideoGridDist } from "../utils/meet.util";

const Meet = () => {
    const subRef = useRef(null);
    useEffect(() => {
        if (subRef) {
            subRef.current.style.gridTemplateColumns = getVideoGridDist(
                subRef.current.getElementsByClassName("attendee").length
            );
        }
    }, [subRef]);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.attendee_container}>
                    <div className={styles.sub} ref={subRef}>
                        <Attendee />
                        <Attendee />
                        <Attendee />
                        <Attendee />
                    </div>
                </div>
                <div className={styles.controlls}>
                    <MeetBtn type="audio" on={true} onclick={null} />
                    <MeetBtn type="video" on={true} onclick={null} />
                    <MeetBtn type="present" onclick={null} />
                    <MeetBtn type="end" onclick={null} />
                </div>
            </div>
        </>
    );
};
export default Meet;
