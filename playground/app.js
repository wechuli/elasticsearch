const client = require("./connection.js");

client.cluster
  .health({})
  .then(data => console.log("The client is healthy", data))
  .catch(err =>
    console.log("There seems to be a problem with your connection")
  );

// client.indices
//   .delete({
//     index: "gov"
//   })
//   .then(response => console.log("Index succesfully deleted", response))
//   .catch(err =>
//     console.log("An error occured while trying to delete the index:", err)
//   );
