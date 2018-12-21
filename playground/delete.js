const client = require("./connection");

client.indices
  .delete({
    index: "gov"
  })
  .then(response =>
    console.log("The index has been successfully deleted, ", response)
  )
  .catch(err =>
    console.log("An error occured while deleting that index, ", err)
  );
