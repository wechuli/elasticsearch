const elasticsearch = require("elasticsearch");

const client = new elasticsearch.Client({
  host:
    "https://search-iot-data-analytics-okmamccstll4hvuv6gqulzqz2u.us-east-1.es.amazonaws.com/"
});

module.exports = client;
