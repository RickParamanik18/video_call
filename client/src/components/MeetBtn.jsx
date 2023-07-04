import { useState } from "react";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import { BsCameraVideo, BsCameraVideoOff } from "react-icons/bs";
import { MdOutlineScreenShare, MdOutlineStopScreenShare } from "react-icons/md";
import { ImPhoneHangUp } from "react-icons/im";
const MeetBtn = ({ type, onclick, on }) => {
    const [toggleMode, setToggleMode] = useState(Boolean(on));
    const onClick = () => {
        setToggleMode((prev) => !prev);
        // onclick()
    };
    return (
        <>
            <div
                className="btn"
                style={{
                    color:
                        type == "end"
                            ? "white"
                            : !toggleMode
                            ? "white"
                            : "#4e4d4d",
                    background:
                        type == "end"
                            ? "red"
                            : !toggleMode
                            ? "#4e4d4d"
                            : "white",
                }}
                onClick={onClick}
            >
                {type == "audio" ? (
                    toggleMode ? (
                        <FaMicrophone />
                    ) : (
                        <FaMicrophoneSlash />
                    )
                ) : type == "video" ? (
                    toggleMode ? (
                        <BsCameraVideo />
                    ) : (
                        <BsCameraVideoOff />
                    )
                ) : type == "present" ? (
                    toggleMode ? (
                        <MdOutlineScreenShare />
                    ) : (
                        <MdOutlineStopScreenShare />
                    )
                ) : (
                    <ImPhoneHangUp />
                )}
            </div>
            <style jsx="true">{`
                .btn {
                    height: 50px;
                    width: 50px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    margin: 5px;
                }
            `}</style>
        </>
    );
};
export default MeetBtn;
