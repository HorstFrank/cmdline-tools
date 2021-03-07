import {Db, MongoClient} from "mongodb";
import {decryptString} from "./utils/crypt";
// import {stringify} from "querystring";
import {connectDb, findInCollection, getCollection, insertInCollection} from "./utils/mongoDB";
// import {unique} from "./utils/arrayHelper";
import dotenv from "dotenv";
dotenv.config();

export type PasswordDoc = {
  name: string;
  pswd: string;
};

// export async function getAllNames() {
//   const mongoHandler = await connectDb(process.env.MONGODB_URL, process.env.MONGO_DATABASE_NAME);
//   const fullDb = await findInCollection(mongoHandler, "pswdDatabase");
//   return unique(fullDb.map((e) => e.name));
// }

// export async function addPasswordObject(pswdObject: object) {
//   const mongoHandler = await connectDb(process.env.MONGODB_URL, process.env.MONGO_DATABASE_NAME);
//   return await insertInCollection(mongoHandler, "pswdDatabase", pswdObject);
// }

export async function getPasswordObject(getname: string): Promise<PasswordDoc | null> {
  const passwordCollection = await getCollection("pswdDatabase");
  const passwordDoc = await passwordCollection.findOne({name: getname});

  if (!passwordDoc) {
    return null;
  }

  /// sdfgs dfgsdf

  return {
    name: passwordDoc.name,
    psdw: decryptString(passwordDoc.psdw, process.env.CRYPTO_MASTER_KEY),
  };

  // return await findInCollection({client: clientInformation, db: bd}, {name: getname});
}

// export function closeDb() {
//   client.close();
// }

export async function getAllDatas() {
  const mongoHandler = await connectDb(process.env.MONGODB_URL, process.env.MONGO_DATABASE_NAME);
  return await findInCollection(mongoHandler, "pswdDatabase");
}

// export async function addPasswordObject(pswdObject: object) {
//   const col = await getCollection("pswdDatabase");
//   return await col.insertOne(pswdObject);
// }

// export async function deletePasswordObject(getname: string): Promise<Boolean> {
//   const col = await getCollection("pswdDatabase");
//   const deleteResult = await col.deleteOne({name: getname});
//   return deleteResult.deletedCount >= 1;
//   // return await col.deleteMany({name: getname});
// }

// export async function updateFieldObject(destName: string, newFieldSet: object): Promise<Boolean> {
//   const col = await getCollection("pswdDatabase");
//   const changed = await col.updateOne({name: destName}, {$set: newFieldSet});
//   return changed.modifiedCount >= 1;
// }

// export async function updatePassword(destName: string, newPassword: string): Promise<Boolean> {
//   // const col = await getCollection("pswdDatabase");
//   // const changed = await updateFieldObject(destName, {pswd: newPassword});
//   return await updateFieldObject(destName, {pswd: newPassword});
// }
