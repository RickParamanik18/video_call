const Attendee = () => {
    return (
        <>
            <div className="attendee">
                <video src="" height={"100%"} width={"100%"} autoPlay></video>
                <div className="name">Rick Paramanik</div>
            </div>
            <style>{`
            .attendee{
                border: 3px solid white;
                margin: 5px;
                border-radius: 5px;
                color:white;
            }
            .name{
                margin:0px 0px 5px 5px;
                position:relative;
                bottom:25px;
            }
        `}</style>
        </>
    );
};
export default Attendee;
