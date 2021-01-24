const router = require("express").Router();
const {
  createRecord,
  readRecords,
  updateRecord,
  deleteRecord,
} = require("../databases/data_structure");

// CREATE
router.post("/", async (apiRequest, apiResponse) => {
  const newRecord = apiRequest.body;
  await createRecord(newRecord);
  apiResponse.send({
    message: "🔐 Data Stored 👍",
    allRecords: await readRecords(),
    status: 200,
  });
});

// READ
router.get("/", async (apiRequest, apiResponse) => {
  apiResponse.send(await readRecords());
});

// UPDATE
router.put("/:id", async (apiRequest, apiResponse) => {
  const updatedRecord = apiRequest.body;
  console.log({ updatedRecord });
  await updateRecord(apiRequest.params.id, updatedProduct);
  apiResponse.send({
    message: "Record Updated.",
    allRecords: await readRecords(),
    status: 204,
  });
});

// DELETE
router.delete("/:recordId", async (apiRequest, apiResponse) => {
  await deleteRecord(apiRequest.params.recordId);
  apiResponse.send({
    message: "Record deleted.",
    allRecords: await readRecords(),
    status: 204,
  });
});

module.exports = router;
