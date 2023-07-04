const createMeetId = () => Math.round(Math.random() * 10000000 + 999999);
const getVideoGridDist = (val) => {
    return val == 1 ? "1fr" : val == 2 ? "1fr 1fr" : "1fr 1fr 1fr";
};

export { createMeetId, getVideoGridDist };
