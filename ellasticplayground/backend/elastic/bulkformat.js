// client.bulk({
//   body: [
//     // action description
//     { index: { _index: "myindex", _type: "mytype", _id: 1 } },
//     // the document to index
//     { title: "foo" }
//   ]
// });

const formatJson = [
  {
    Rank: "1",
    country: "China",
    population: "1388232693",
    World: "0.185"
  },
  {
    Rank: "2",
    country: "India",
    population: "1342512706",
    World: "0.179"
  },
  {
    Rank: "3",
    country: "U.S.",
    population: "326474013",
    World: "0.043"
  }
];

const uploadBulk = async data => {
  const prepared = await data.map(inst => {
    return (
      {
        index: {
          _index: "worldpopulation",
          _type: "population",
          _id: data.inst
        }
      },
      {
        rank: parseInt(inst.Rank),
        country: inst.country,
        population: parseInt(inst.population),
        world: parseFloat(inst.World)
      }
    );
  });
  console.log(prepared);
};

uploadBulk(formatJson);
