// IP address: 135.23.222.131
// PORT: 50542

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
    console.log("Connection is made with the server");
  });

  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log("Server says: ", data);
  });
  
  return conn;
};

// conn.on("event name", () => {
//   // code that does something
// });



console.log("Connecting ...");
connect();