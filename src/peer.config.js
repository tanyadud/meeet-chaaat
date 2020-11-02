export default {
  host: process.env.REACT_APP_PEER_SERVER_URL,
  secure: true,
  path: '/',
  config: {
    iceServers: [
      {
        url: `stun:${process.env.REACT_APP_TURN_HOST}`,
      },
      {
        username: process.env.REACT_APP_TURN_USER,
        url: `turn:${process.env.REACT_APP_TURN_HOST}?transport=udp`,
        credential: process.env.REACT_APP_TURN_PASSWORD,
      },
      {
        username: process.env.REACT_APP_TURN_USER,
        url: `turn:${process.env.REACT_APP_TURN_HOST}?transport=tcp`,
        credential: process.env.REACT_APP_TURN_PASSWORD,
      },
    ],
  },
};
