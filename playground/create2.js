const client = require("./connection.js");
client.indices
  .create({
    index: "govpet"
  })
  .then(response => {
    console.log("Your Index has been created: ", response);
  })
  .catch(err => console.log("There was a problem creating the index: ", err));
