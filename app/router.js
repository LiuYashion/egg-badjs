'use strict';
 
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/query', controller.query.index);
  router.post('/upload', controller.upload.index);
  router.get('/upload', controller.upload.getter);
};
