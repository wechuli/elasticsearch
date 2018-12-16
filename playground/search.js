const client = require("./connection.js");

client
  .search({
    index: "gov",
    type: "constituencies",
    ignore: [404],
    body: {
      query: {
        wildcard: { ConstituencyName: "???wich" }
      }
    }
  })
  .then(response => {
    console.log(response.hits.hits);
  })
  .catch(err =>
    console.log("There was an error searching the documents,", err)
  );
