import { io } from 'socket.io-client';

export const initSocket = async () => {
    const options = {
        forceNew: true,
        reconnectionAttempts: Infinity,
        timeout: 10000,
        transports: ['websocket'],
    };

    const backendURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
    console.log("🔗 Connecting to backend:", backendURL); // Debug log

    const socket = io(backendURL, options);

    socket.on('connect', () => {
        console.log("✅ Socket connected:", socket.id);
    });

    socket.on('connect_error', (err) => {
        console.error("❌ Socket connection failed:", err.message);
    });

    return socket;
};
