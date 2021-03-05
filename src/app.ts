import prompts from "prompts";
// import {printMsgRight, printMsgWrong} from "./print";
// import {hasAccess} from "./checks";

// import {questions} from "./questions";
// console.log(questions);

// import {MongoClient} from "mongodb";
import dotenv from "dotenv";
import {decryptString, encryptString} from "./../utils/crypt";
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

const questions = {
  init: [
    {
      type: "text",
      name: "masterPswd",
      message: "Your Masterpswd? ",
    },
    {
      type: "multiselect",
      name: "action",
      message: "What do you want to do?",
      choices: [
        {title: "Set a new Password", value: "set"},
        {title: "Get a Password", value: "get"},
        {title: "Edit a Pasword", value: "edit"},
        {title: "Delete an Entry", value: "delete"},
      ],
    },
  ],
  set: [
    {
      type: "text",
      name: "serviceName",
      message: "The name of the Service? ",
    },
    {
      type: "password",
      name: "serviceName",
      message: "The name of the Service? ",
    },
  ],
  get: [
    {
      type: "text",
      name: "serviceName",
      message: "The name of the Service? ",
    },
  ],
  edit: [
    {
      type: "text",
      name: "serviceName",
      message: "The name of the Service? ",
    },
  ],
  delete: [
    {
      type: "text",
      name: "serviceName",
      message: "The name of the Service? ",
    },
  ],
};

const run = async () => {
  const url = process.env.MONGODB_URL;
  // console.log(url);
  //

  try {
    console.log(
      "_-^-_-^-_-^-_-^-_-^-_-^-_-^-_-^-_-^-_-^-_-^-_-^-_-^-_-^-_-^-_-^-_-^-_-^-_-^-_-^-_-^-_-^-_-^-"
    );
    console.log("                       Welcome to xxxx");
    console.log(
      "_-^-_-^-_-^-_-^-_-^-_-^-_-^-_-^-_-^-_-^-_-^-_-^-_-^-_-^-_-^-_-^-_-^-_-^-_-^-_-^-_-^-_-^-_-^-"
    );
    // console.log(questions.init);

    // const response = await prompts(questions.init);
    const response = await prompts([
      {
        type: "text",
        name: "masterPswd",
        message: "Your Masterpswd? ",
      },
      {
        type: "multiselect",
        name: "action",
        message: "What do you want to do?",
        choices: [
          {title: "Get a Password", value: "get"},
          {title: "Set a new Password", value: "set"},
          {title: "Edit a Pasword", value: "edit"},
          {title: "Delete an Entry", value: "delete"},
        ],
      },
    ]);
    // console.log(response);

    // in db auslagern:
    await connectDb(url, "cmdline-tools-boris");
    // console.log({client});
    // await getCollection("inverntoy");
    // await addPasswordObject({name: "Leon", pswd: "1234"});
    // const x = await getPasswordObject("Leon");
    //

    // await addPasswordObject({
    //   name: "Boris sein W-Lan",
    //   pswd: encryptString("vercryptetes und geheimes pswd", process.env.CRYPTO_MASTER_KEY),
    // });
    // await updateFieldObject("WLAN", {
    //   pswd: encryptString("vercryptetes und geheimes pswd", process.env.CRYPTO_MASTER_KEY),
    // });
    //
    // const delCheck = await deletePasswordObject("Leon2");
    // console.log(`Der Datensatz wurde ${delCheck ? "" : "nicht"} upgedated.`);
    await closeDb();
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
