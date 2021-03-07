import {startRESTapiServer} from "./utils/server";
import {getAllDatas} from "./db";
import dotenv from "dotenv";
dotenv.config();

const cb = {
  GET: handleGET,
  FALLBACK: handleFallback,
};

startRESTapiServer(+process.env.PORT, cb);

async function handleGET(c: any) {
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
