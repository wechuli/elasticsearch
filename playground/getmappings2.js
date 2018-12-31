const client = require("./connection");

client.indices
  .getMapping({
    index: "govpet",
    type: "petitions"
  })
  .then(data => console.log(data.govpet.mappings.petitions.properties))
  .catch(err => console.log(err));
