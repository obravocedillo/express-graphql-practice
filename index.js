/**
 * This file only maps the app imported from app.js to a port and stars listening
 * https://flaviocopes.com/graphql-node-express/
 * https://alotama.com/blog/conectarse-a-mongodb-desde-graphql
 */
const app = require("./app");

app.listen(3001, () => {
  console.log("Example app listening on port 3001!");
});