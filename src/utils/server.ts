import http from "http";

// type RESTcallbackObject = {
//   FALLBACK:
// }
/*
Example:

const cb = {
  GET: handleGETfunction,
  POST: handlePOSTfunction,
  FALLBACK: handleFALLBACKfunction,
};
# FALLBACK will called if the requested Methode is not defined in your cb

startRESTapiServer(portnumber, cb);



*/

export function startRESTapiServer(port: number, callbackObject: any) {
  if (!callbackObject) {
    console.error("ERROR: No Callback Object.");
    return;
  }
  if (!callbackObject["FALLBACK"] || !callbackObject["GET"]) {
    console.error("ERROR: Your callbackObject must have at least a FALLBACK and a GET function.");
    return;
  }

  const server = http.createServer((req, res) => {
    const returnObject = createRESTobjectFromUrl(req);

    const getResponse = Object.keys(callbackObject).includes(req.method)
      ? callbackObject[req.method](returnObject)
      : callbackObject["FALLBACK"](returnObject);

    // if typeof getResponse.header === 'string' ?

    const header =
      typeof getResponse.header === "string"
        ? buildHederObjectFromString(getResponse.header)
        : getResponse.header;

    res.statusCode = getResponse.status;
    res.setHeader(header.name, header.value);
    res.end(getResponse.payload);
  });

  server.listen(port, () => {
    console.log(`Server running at port ${port}`);
  });
}

function buildHederObjectFromString(stringHeader: string) {
  const [name, value] = stringHeader.split(":").map((e) => e.trim());
  return {name: name, value: value};
}

function createRESTobjectFromUrl(req: any) {
  // REST naming: https://restfulapi.net/resource-naming/
  // memo: collection,store,controller
  // console.log(req.status);
  //
  // Naming EXAMPLE:
  // http://api.example.com/device-management/managed-devices?region=USA&brand=XYZ
  // http://api.example.com/DOCUMENT/(COLLECTION|STORE)?FILTER

  const urlSements = req.url.split("/").filter((cleanEmpty: string) => cleanEmpty !== "");
  const filters = getUrlParameter(req.url);
  const collection = urlSements.slice(1, urlSements.length);
  return {
    url: req.url,
    method: req.method,
    segments: urlSements,
    rest: {
      document: urlSements[0],
      collection: collection,
      filters: filters,
    },
  };
}

function getUrlParameter(url: string) {
  const [leftside, rightside] = url.split("?");
  return !rightside
    ? {}
    : JSON.parse(
        `{"${decodeURI(rightside).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"')}"}`
      );

  /*
JSON.parse(
        '{"' +
          decodeURI(rightside).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +
          '"}'
      );
*/
}

// res.statusCode = 200;
// res.setHeader("Content-Type", "application/json");
// res.end(JSON.stringify(content));
