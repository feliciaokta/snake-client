const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: 50542,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Successfully connected to game server");
    conn.write("Name: ILY");
    // setInterval(() => {
    //   conn.write("Move: up");   //move up is commented bcs we don't want the snake to move up on program startup
    // }, 2000);
  });
  
  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log("Server says: ", data);
  });
  
  return conn;
};

module.exports = {connect};


// conn.on("event name", () => {      -- this "event name" is built-in 
//   // code that does something
// });

/* options for "event name":
- close         - error
- connect       - lookup
- data          - ready
- drain         - timeout
- end
https://nodejs.org/api/net.html#net_class_net_socket
*/
