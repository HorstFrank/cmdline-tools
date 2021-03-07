import {
  connectDb,
  closeDb,
  findInCollection,
  insertInCollection,
  deleteOneInCollection,
  deleteManyInCollection,
  updateOneInCollection,
  updateManyInCollection,
} from "./utils/mongoDB";
import dotenv from "dotenv";
dotenv.config();

const run = async () => {
  // MONGODB_URL=mongodb://{USER_NAME}:{USER_ACCESSKEY}@{URL}:{PORT}?authSource=admin

  // const url = process.env.MONGODB_URL;
  // console.log(url);
  //

  try {
    // console.log(response);

    // in db auslagern:
    const mongoHandler = await connectDb(process.env.MONGODB_URL, process.env.MONGO_DATABASE_NAME);
    // console.log(mongoHandler.stats);
    // console.log(mongoHandler.status);

    // example FIND
    // const test = await findInCollection(mongoHandler, "pswdDatabase", {name: "Leon17"});
    // console.log(test);

    // example INSERT
    // const test = await insertInCollection(mongoHandler, "pswdDatabase", {name: "testname"});
    // console.log(test);

    // example DELETE One
    // const test = await deleteOneInCollection(mongoHandler, "pswdDatabase", {name: "Leon17"});
    // console.log(test);

    // example DELETE Many
    // const test = await deleteManyInCollection(mongoHandler, "pswdDatabase", {name: "Leon17"});
    // console.log(test);

    // example UPDATE one
    // const test = await updateOneInCollection(
    //   mongoHandler,
    //   "pswdDatabase",
    //   {name: "testname"},
    //   {$set: {name: "testnameMANY"}}
    // );
    // console.log(test);

    // example UPDATE many
    // const test = await updateManyInCollection(
    //   mongoHandler,
    //   "pswdDatabase",
    //   {name: "testnameMANY"},
    //   {$set: {name: "testname"}}
    // );
    // console.log(test);

    await closeDb(mongoHandler);
  } catch (error) {
    console.error(error);
  }
};
run();
