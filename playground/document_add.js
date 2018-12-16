const client = require("./connection.js");

client
  .index({
    index: "gov",
    id: 1,
    type: "constituencies",
    ignore: [404],
    body: {
      ConstituencyName: "Ipswich",
      ConstituencyID: "E14000761",
      ConstituencyType: "Borough",
      Electorate: 74499,
      ValidVotes: 48694
    }
  })
  .then(response => console.log("Document indexed,", response))
  .catch(err =>
    console.log("An error occured while trying to index your document", err)
  );

client
  .count({
    index: "gov",
    type: "constituencies"
  })
  .then(response => console.log(response))
  .catch(err => console.log(response));
