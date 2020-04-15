import { decorate, observable } from "mobx";
import io from "socket.io-client";

class SocketStore {
  socket = io.connect("http://178.128.207.229:8000");
  currentBid = 0;

  submitBid = (bid) => {
    this.socket.emit("Bid", bid);
  };

  fetchCurrentBid = () => {
    this.socket.on("Bid", (bid) => {
      this.currentBid = bid;
    });
  };
}

decorate(SocketStore, {
  socket: observable,
  bid: observable,
  currentBid: observable,
});

const socketStore = new SocketStore();
export default socketStore;
