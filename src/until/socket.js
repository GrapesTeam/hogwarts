import io from 'socket.io-client';

const ItalkiSocket = {
  open() {
    this.socket = io(`${process.env.REACT_APP_API_URL_DEV}/message/ws-poll`);
  },

  close() {
    this.socket.close();
  }
}

export default ItalkiSocket
