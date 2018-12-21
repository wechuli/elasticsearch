const client = require("./connection");

const createIndex = async () => {
  try {
    const response = await client.indices.create({
      index: "anotheroneone"
    });
    console.log(response);
  } catch (error) {
    console.log("An error occured while making the request", error);
  }
};


createIndex()


client.indices.putMapping