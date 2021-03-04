// const prompts = require('prompts');
// import prompts from "prompts";
// import {printMsgRight, printMsgWrong} from "./print";
// import {hasAccess} from "./checks";
// import {questions} from "./questions";
// import {questions} from "./questions";

import {MongoClient} from "mongodb";
import dotenv from "dotenv";
import {
  addPasswordObject,
  closeDb,
  connectDb,
  deletePasswordObject,
  getCollection,
  getPasswordObject,
  updateFieldObject,
  updatePassword,
} from "./db";
dotenv.config();

const run = async () => {
  const url = process.env.MONGODB_URL;
  // console.log(url);

  try {
    // in db auslagern:
    await connectDb(url, "cmdline-tools-boris");
    // await getCollection("inverntoy");
    // await addPasswordObject({name: "Leon", pswd: "1234"});

    // const x = await getPasswordObject("Leon");
    //
    // await addPasswordObject({name: "Leonxxx", pswd: "1234"});
    await updateFieldObject("Leon17", {pswd: "yyyxxx"});
    //
    // await updatePassword("Leon17", "xx");
    // getPasswordObjectDelete
    // const delCheck = await deletePasswordObject("Leon2");
    // console.log(`Der Datensatz wurde ${delCheck ? "" : "nicht"} upgedated.`);

    // console.log(x);
    await closeDb();

    // collection function
    // await db.collection("inverntoy")

    // await db.collection("inverntoy").insertMany([
    //   {
    //     einhundertundeins: "zwei",
    //     einhundertunddrei: "vier",
    //     einhundertundfünf: 6,
    //     einhundertund7: {acht: 9, zehn: "elf"},
    //   },
    // ]);

    // client.close();
  } catch (error) {
    console.error(error);
  }
};
run();

// const run = async (questions: any) => {
//   const userInput = await prompts(questions);
//   if (hasAccess(userInput)) {
//     printMsgRight();
//   } else {
//     printMsgWrong();
//     run(questions);
//   }
// };

// run(questions);
