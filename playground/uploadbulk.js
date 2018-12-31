const client = require("./connection.js");
const jsonData = require("./constituencies.json");

const body = [];

async function createbulk(dataObjects) {
  dataObjects.map(dataObject => {
    body.push({
      index: { _index: "govcon", _type: "constituencies", _id: dataObject.PANO }
    });
    body.push(dataObject);
  });
}

createbulk(jsonData)
  .then(() => {
    client
      .bulk({
        body
      })
      .then(response => console.log(response))
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
