const client = require("./connection");

client.indices
  .get({
    index: "worldpopulation"
  })
  .then(data => console.log(data.worldpopulation.settings.index))
  .catch(err => console.log(err));

client.search({
    index: "worldpopulation"
  })
  .then(response => console.log(response.hits.hits))
  .catch(err => console.log(err));
