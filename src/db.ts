import {Db, MongoClient} from "mongodb";
// import {stringify} from "querystring";

let client: MongoClient = null;
let db: Db = null;

type dbObject = {
  name: string;
  pswd: string;
  // $set: object;
};

export async function connectDb(url: string, dbname: string) {
  client = await MongoClient.connect(url, {
    useUnifiedTopology: true,
  });
  db = client.db(dbname);
}

export async function getCollection(collectionName: string) {
  return await db.collection(collectionName);
}

export function closeDb() {
  client.close();
}

export async function addPasswordObject(pswdObject: object) {
  const col = await getCollection("pswdDatabase");
  return await col.insertOne(pswdObject);
}

export async function getPasswordObject(getname: string) {
  const col = await getCollection("pswdDatabase");
  return await col.findOne({name: getname});
}

export async function deletePasswordObject(getname: string): Promise<Boolean> {
  const col = await getCollection("pswdDatabase");
  const deleteResult = await col.deleteOne({name: getname});
  return deleteResult.deletedCount >= 1;
  // return await col.deleteMany({name: getname});
}

export async function updateFieldObject(destName: string, newFieldSet: object): Promise<Boolean> {
  const col = await getCollection("pswdDatabase");
  const changed = await col.updateOne({name: destName}, {$set: newFieldSet});
  return changed.modifiedCount >= 1;
}

export async function updatePassword(destName: string, newPassword: string): Promise<Boolean> {
  // const col = await getCollection("pswdDatabase");
  // const changed = await updateFieldObject(destName, {pswd: newPassword});
  return await updateFieldObject(destName, {pswd: newPassword});
}
