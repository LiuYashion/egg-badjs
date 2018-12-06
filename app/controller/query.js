'use strict';

const Controller = require('egg').Controller;

class QueryController extends Controller {
  async index() {
    const _ctx = this.ctx;

    const badjs = await _ctx.model.Badjs.findAll();
    
    _ctx.body = {
      status: 200,
      result: badjs,
    };
  }
}

module.exports = QueryController;
