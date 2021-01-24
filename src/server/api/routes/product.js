
const router = require('express').Router();
const {deleteProduct, updateProduct, createProduct, getProducts} = require('../databases/product');

router.get('/', async (apiRequest, apiResponse) => {
  apiResponse.send(await getProducts());
});

// we name our parameters apiRequest and apiResponse here but
// there is no strong reason these variables could not be named `req` and `res` or `request` and `response`
// the reason for this naming is so we are thinking about "api" tonight
router.post('/', async (apiRequest, apiResponse) => {
  const newProduct = apiRequest.body;
  await createProduct(newProduct);
  apiResponse.send({
    message: 'New product created.',
    allProducts: await getProducts(),
    thanks: true
  });
});

// endpoint to delete a product
router.delete('/:productId', async (apiRequest, apiResponse) => {
  await deleteProduct(apiRequest.params.productId);
  apiResponse.send({ message: 'Product deleted.' });
});

// endpoint to update a product
router.put('/:id', async (apiRequest, apiResponse) => {
  const updatedProduct = apiRequest.body;
  console.log({ updatedProduct})
  await updateProduct(apiRequest.params.id, updatedProduct);
  apiResponse.send({ message: 'Product updated.' });
});

module.exports = router;



