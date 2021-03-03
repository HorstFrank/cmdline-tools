import {Db, MongoClient} from "mongodb";

let client: MongoClient = null;
let db: Db = null;

export async function connectDb(url: string, dbname: string) {
  client = await MongoClient.connect(url, {
    useUnifiedTopology: true,
  });

  db = client.db(dbname);
  //  console.log("Connected to DB!");
}

export function getCollection(collectionName: any) {
  return db.collection(collectionName);
}

export function closeDb() {
  client.close();
}

export async function addPasswordObject(pswdObject: any) {
  const col = await getCollection("pswdDatabase");
  return await col.insertOne(pswdObject);
}

export async function getPasswordObject(getname) {
  const col = await getCollection("pswdDatabase");
  return await col.findOne({name: getname});
}

export async function getPasswordObjectDelete(getname) {
  const col = await getCollection("pswdDatabase");
  return await col.deleteMany({name: getname});
}

export async function updatePassword(destName, newPassword) {
  const col = await getCollection("pswdDatabase");
  return await col.updateOne({name: destName}, {$set: {pswd: newPassword}});
}

/*
   db.restaurant.updateOne(
      { "name" : "Central Perk Cafe" },
      { $set: { "violations" : 3 } }
   );


The updateOne() method has the following syntax:

db.collection.updateOne(
   <filter>,
   <update>,
   {
     upsert: <boolean>,
     writeConcern: <document>,
     collation: <document>,
     arrayFilters: [ <filterdocument1>, ... ],
     hint:  <document|string>        // Available starting in MongoDB 4.2.1
   }
)

db.orders.deleteMany( { "client" : "Crude Traders Inc." } );

*/

// in db auslagern:

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
