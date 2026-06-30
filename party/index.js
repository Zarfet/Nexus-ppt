export default {
  onConnect(connection, room) {
    connection.addEventListener("message", (event) => {
      // Relay to all other connected clients
      room.broadcast(event.data, [connection.id]);
    });
  }
};
