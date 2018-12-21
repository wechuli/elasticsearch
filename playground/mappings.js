const client = require("./connection");

client.indices
  .putMapping({
    index: "gov",
    type: "constituencies",
    body: {
      properties: {
        "constituencyname": {
          "type": "string", // type is a required attribute if index is specified
          "index": "not_analyzed"
        },
        "electorate": {
          "type": "integer"
        },
        "validvotes": {
          "type": "integer"
        }
      }
    }
  })
  .then(Response => console.log("Mappings successfully created: ", Response))
  .catch(err =>
    console.log("An Error occured while making the request: ", err)
  );
