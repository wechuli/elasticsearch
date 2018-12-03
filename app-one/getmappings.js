const client = require("./connection");

client.indices.getMapping({ index: "gov", type: "constituencies" }, function(
  err,
  resp
) {
  if (err) {
    console.log(err.message);
  } else {
    console.log(resp.gov.mappings.constituencies.properties);
  }
});
