const client = require("./connection");

client.indices
  .getMapping({
    index: "gov",
    type: "constituencies"
  })
  .then(data => console.log(data.gov.mappings.constituencies.properties))
  .catch(err => console.log(err));
