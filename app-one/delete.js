const client = require("./connection");

client.indices.delete({ index: "gov" }, function(err, resp, status) {
  if (err) {
    console.log(err);
  } else {
    console.log("Delete", resp);
  }
});
