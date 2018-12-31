const client = require("./connection");

client.indices
  .getMapping({
    index: "govcon",
    type: "constituencies"
  })
  .then(data => console.log(data.govcon.mappings.constituencies.properties))
  .catch(err => console.log(err));
