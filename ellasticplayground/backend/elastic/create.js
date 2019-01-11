const client = require("./connection");

client.indices
  .create({
    index: "worldpopulation"
  })
  .then(response =>
    console.log("Your index has been succesfuly created", response)
  )
  .catch(error => console.log("Error creating the index", error));
