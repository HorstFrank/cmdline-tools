import prompts from "prompts";
import {clone} from "./utils/objectHelper";
// import {printMsgRight, printMsgWrong} from "./print";
// import {hasAccess} from "./checks";

import {questions} from "./questions";
// console.log(questions);

// import {addPasswordObject, getAllNames} from "./db";

// import {MongoClient} from "mongodb";
import dotenv from "dotenv";
dotenv.config();

import {decryptString, encryptString} from "./utils/crypt";
import {Console} from "node:console";
// import {
//   addPasswordObject,
//   closeDb,
//   connectDb,
//   deletePasswordObject,
//   getCollection,
//   getPasswordObject,
//   updateFieldObject,
//   updatePassword,
// } from "./db";

const run = async () => {
  const url = process.env.MONGODB_URL;
  // console.log(url);
  //

  try {
    // console.log("Welcome to Password-Storage");
    // // console.log(questions.init);
    // const response = await prompts(clone(questions().start));
    // if (response.action === "exit") {
    //   return;
    // }
    // if (response.action === "get") {
    //   const allNames = await getAllNames();
    //   const promtsChoices = allNames.map((e: any) => `{"title":"${e}", "value": "${e}"}`);
    //   const promtsChoiceStr = `{"type": "select", "name": "action","message": "What password do you want to know?","choices": [${promtsChoices.join(
    //     ","
    //   )}]}`;
    //   const nameChoice = await prompts([JSON.parse(promtsChoiceStr)]);
    //   console.log("TODOOOO .... get pswd from db");
    //   return;
    // }
    // if (response.action === "set") {
    //   console.log("---- Set a new Password");
    //   const setResponse = await prompts(clone(questions().set));
    //   if (setResponse.pswd1 !== setResponse.pswd1) {
    //     console.log("?!?! No, no, no ... You have entered two different passwords.");
    //     return;
    //   }
    //   const addResult = await addPasswordObject({
    //     name: setResponse.name,
    //     pswd: encryptString(setResponse.pswd1, process.env.CRYPTO_MASTER_KEY),
    //   });
    //   // const allNames = await getAllNames(process.env.MONGODB_URL, process.env.MONGO_DATABASE_NAME);
    //   console.log(addResult);
    //   if (addResult.result.okay === 1) {
    //     console.log(`Password for '${setResponse.name}' was inserted.`);
    //   }
    //   return;
    // }
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
