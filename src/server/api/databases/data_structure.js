const { getDatabase } = require("./common");

// https://docs.mongodb.com/manual/reference/method/ObjectId/
const { ObjectID } = require("mongodb");

const getUserName = require("git-user-name");

// a "collection" in mongo is a lot like a list which is a lot like an Array
const collectionName = "data_structure";

async function createRecord(product) {
  const database = await getDatabase();
  product.addedBy = getUserName();
  // for `insertOne` info, see https://docs.mongodb.com/manual/reference/method/js-collection/
  const { insertedId } = await database
    .collection(collectionName)
    .insertOne(product);
  return insertedId;
}

async function readRecords() {
  const database = await getDatabase();
  // `find` https://docs.mongodb.com/manual/reference/method/db.collection.find/#db.collection.find
  return await database.collection(collectionName).find({}).toArray();
}

async function deleteRecord(id) {
  const database = await getDatabase();
  // https://docs.mongodb.com/manual/reference/method/ObjectId/
  // for `deleteOne` info see  https://docs.mongodb.com/manual/reference/method/js-collection/
  await database.collection(collectionName).deleteOne({
    _id: new ObjectID(id),
  });
}

async function updateRecord(id, product) {
  const database = await getDatabase();

  // `delete` is new to you. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
  delete product._id;
  product.updatedBy = getUserName();
  // https://docs.mongodb.com/manual/reference/method/db.collection.update/
  await database.collection(collectionName).update(
    { _id: new ObjectID(id) },
    {
      $set: {
        ...product,
      },
    }
  );
}

// export the functions that can be used by the main app code
module.exports = {
  createRecord,
  readRecords,
  updateRecord,
  deleteRecord,
};
