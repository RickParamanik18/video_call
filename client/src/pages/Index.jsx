import { useRef } from "react";
import pic from "../assets/pic.jpg";
import styles from "../styles/index.module.css";
import { useNavigate } from "react-router-dom";
import { createMeetId } from "../utils/meet.util";

const Index = () => {
    const optionsRef = useRef(null);
    const btn_containerRef = useRef(null);
    const inputRef = useRef(null);
    const navigate = useNavigate();

    const newMeetingHandler = () => {
        const options_elem = optionsRef.current;
        const btn_container_elem = btn_containerRef.current;
        let flag =
            options_elem.style.display === "none" ||
            options_elem.style.display === "";

        options_elem.style.display = flag ? "block" : "none";
        btn_container_elem.style.display = flag ? "absolute" : "relative";

        options_elem.scrollTop = options_elem.scrollHeight;
    };

    const laterMeethandler = () => {
        alert(`here is your meeting link: ${window.location + createMeetId()}`);
    };
    const instantMeetHandler = () => {
        navigate("/" + createMeetId());
    };
    const joinClickhandler = () => {
        const input_elem = inputRef.current;
        const meetId = input_elem.value;
        navigate("/" + meetId);
    };
    return (
        <>
            <div className={styles.container}>
                <div className={styles.controls}>
                    <h1>Video meetings Now for Free</h1>
                    <p>
                        We re-engineered the service we built for secure
                        business meetings, Google Meet, to make it free and
                        available for all.
                    </p>
                    <div
                        className={styles.btn_container}
                        ref={btn_containerRef}
                    >
                        <div className={styles.actions}>
                            <button onClick={newMeetingHandler}>
                                New Meeting
                            </button>
                            <div className={styles.options} ref={optionsRef}>
                                <ul>
                                    <li onClick={laterMeethandler}>
                                        Create a meeting for later
                                    </li>
                                    <li onClick={instantMeetHandler}>
                                        Start an instant meeting
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.link_input}>
                            <input
                                type="text"
                                placeholder="Enter meeting code"
                                ref={inputRef}
                            />
                            <span onClick={joinClickhandler}>Join</span>
                        </div>
                    </div>
                </div>
                <div className={styles.pic}>
                    <img src={pic} alt="not_available" />
                </div>
            </div>
        </>
    );
};
export default Index;
