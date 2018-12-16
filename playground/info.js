const client = require("./connection");

// client
//   .count({
//     index: "gov",
//     type: "constituencies"
//   })
//   .then(response => console.log(response))
//   .catch(err => console.log(response));

client
  .info({
    index: "gov",
    type: "constituencies"
   
  })
  .then(response => console.log(response))
  .catch(err => console.log(err));
