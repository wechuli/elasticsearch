const client = require("./connection");

const searchCountry = async countryName => {
  try {
    const response = await client.search({
      index: "worldpopulation",
      body: {
        from: 0,
        size: 1000,
        query: {
          match_all: {}
        }
      }
    });
    console.log(response.hits.hits);
  } catch (error) {
    console.log(`There was an error handling your request ${error}`);
  }
};

searchCountry("South Africa");
