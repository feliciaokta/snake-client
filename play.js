// IP address: 135.23.222.131
// PORT: 50542

const connect = require("./client");

// const net = require("net");


console.log("Connecting ...");
connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  const handleUserInput = function (key) {
    if (key === '\u0003') {
      process.exit();
    }
  };
  
  stdin.on("data", handleUserInput);
  
  return stdin;
};

setupInput();