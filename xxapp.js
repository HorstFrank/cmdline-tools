// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });
var cmd = process.argv.slice(2)[0];
// args["name"]; //joe
if (cmd === "get") {
    console.log("get what?");
}
else if (cmd === "set") {
    console.log("set what?");
}
else if (cmd === "doctor") {
    console.log("Doctor who?");
}
