const client = require("./connection");
const data = require("./worldpopulation.json");

const prepareddata = [];

const uploadBulk = async data => {
  await data.forEach(inst => {
    prepareddata.push({
      index: {
        _index: "worldpopulation",
        _type: "population",
        _id: inst.Rank
      }
    });
    prepareddata.push({
      rank: parseInt(inst.Rank),
      country: inst.country,
      population: parseInt(inst.population),
      world: parseFloat(inst.World)
    });
  });
};
uploadBulk(data);

client
  .bulk({
    body: prepareddata
  })
  .then(response => console.log("Documents Successfully uploaded", response))
  .catch(error =>
    console.log("An error occured while uploading your documents", error)
  );
