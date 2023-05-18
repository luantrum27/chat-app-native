import { io } from 'socket.io-client';

export const socket = io('ws://192.168.62.66:8000', {
  autoConnect: false,
});
