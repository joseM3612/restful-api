const {Router} = require('express');

const productsRouter = require('./products.router.js')
const usersRouter = require('./users.router.js')
const categoriesRouter = require('./categories.router.js');

function routerApi(app){

  const routerV1 = Router();
  app.use('/api/v1', routerV1);

  routerV1.use('/products', productsRouter);
  routerV1.use('/users', usersRouter);
  routerV1.use('/categories', categoriesRouter);

  const routerV2 = Router();
  app.use('/api/v2', routerV2);
  routerV2.use('/products', productsRouter);

}

module.exports = routerApi;
