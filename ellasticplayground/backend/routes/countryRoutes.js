const express = require("express");
const client = require("../elastic/connection");

const router = express.Router();

router.get("/:count", async (req, res) => {
    const { count } = req.params;
  try {
    const response = await client.search({
      index: "worldpopulation",
      body: {
        from: count,
        size: 10,
        query: {
          match_all: {}
        }
      }
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/country/:country", async (req, res) => {
    const { country } = req.params;
    try {
      const response = await client.search({
        index: "worldpopulation",
        body: {          
          query: {
            match: {country}
          }
        }
      });
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  });


module.exports = router;
