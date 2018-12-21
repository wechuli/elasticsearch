const client = require("./connection");

// client
//   .count({
//     index: "gov",
//     type: "constituencies"
//   })
//   .then(response => console.log(response))
//   .catch(err => console.log(response));

async function getInfo() {
  try {
    const response = await client.info({
      index: "gov",
      type: "constituencies"
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

getInfo();
