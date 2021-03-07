// import {startRESTapiServer} from "./utils/server";
import {connectDbWithGolbals} from "./utils/mongoDB";
import http from "http";
// import {connectDb} from "./db";

import dotenv from "dotenv";
import {getPasswordObject} from "./db";
dotenv.config();

const port = process.env.PORT;
const url = process.env.MONGODB_URL;

connectDbWithGolbals(url, "cmdline-tools-boris");

const server = http.createServer(async (request, response) => {
  if (request.url === "/") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    response.end("<h1>Safe Me!</h1>");
    return;
  }

  const parts = request.url.split("/");
  const passwordName = parts[parts.length - 1];

  if (request.method === "GET") {
    const passwordDoc = await getPasswordObject(passwordName);
    if (!passwordDoc) {
      response.statusCode = 404;
      response.end();
      return;
    }
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(passwordDoc));
    return;
  }

  response.end();
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port} 🤘`);
});

async function handleGET(c: any) {
  // console.log(content);
  /*

  "rest": {
    "document": "pswd-database",
    "collection": [
      "names"
    ],
    "filters": {}
  }
 */

  if (c.rest.document !== "pswd-database") {
    return {
      status: 403,
      header: {name: "Content-Type", value: "application/json"},
      payload: JSON.stringify({
        status: 403,
        error: "Only access to the Document 'pswd-database' is allowed.",
      }),
    };
  }

  if (c.rest.collection[0] === "names") {
    const allDatas = await getAllDatas();
    return {
      status: 200,
      header: {name: "Content-Type", value: "application/json"},
      payload: JSON.stringify(allDatas),
    };
  }

  return {
    status: 200,
    header: {name: "Content-Type", value: "application/json"},
    payload: JSON.stringify(c),
  };

  // return res;
}

function handleFallback(content: any) {
  return {
    status: 400,
    header: "Content-Type: application/json",
    // header: {name: "Content-Type", value: "application/json"},
    payload: JSON.stringify({error: `The Method ${content.method} is not defined`}),
  };
}
function getAllDatas() {
  throw new Error("Function not implemented.");
}
