const client = require("./connection.js");

client
  .search({
    index: "gov",
    type: "constituencies",
    ignore: [404],
    body: {
      query: {
        match: {'ConstituencyName':'Ipswich'}
      }
    }
  })
  .then(response => {
    console.log(response.hits.hits);
  })
  .catch(err =>
    console.log("There was an error searching the documents,", err)
  );
