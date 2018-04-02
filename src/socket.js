import io from 'socket.io-client';

const socket = {
  open(store) {
    this.socketClient = io(
      `${process.env.REACT_APP_API_URL_DEV}/message/ws-poll`
    );
  },

  send(data, dispatch) {
    this.socketClient.send(data, dispatch);
  },

  emit(event, data, dispatch) {
    this.socketClient.emit(event, data, dispatch);
  },

  close() {
    this.socketClient.close();
  },
};

export default socket;
