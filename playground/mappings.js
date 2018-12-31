const client = require("./connection");

client.indices
  .putMapping({
    index: "govcon",
    type: "constituencies",
    body: {
      properties: {
        ConstituencyName: {
          type: "keyword" // type is a required attribute if index is specified-not this is the syntax for non-analyzed fields, elasticsearch will not try to tokenize this field
          
        },
        Electorate: {
          type: "integer"
        },
        ValidVotes: {
          type: "integer"
        }
      }
    }
  })
  .then(Response => console.log("Mappings successfully created: ", Response))
  .catch(err =>
    console.log("An Error occured while making the request: ", err)
  );
