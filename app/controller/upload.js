'use strict';

const Controller = require('egg').Controller;

class QueryController extends Controller {
  async index() {
    const _ctx = this.ctx;
    _ctx.body = {
      status: 403,
      result: 'error',
    };
  }

  async getter() {

    const _ctx = this.ctx;
    let query = _ctx.query

    let host = this.ctx.request.header['host']
    let userAgent = this.ctx.request.header['user-agent']
 
    console.log(query['msg[1]'])

    const badjs = await _ctx.model.Badjs.create({
      ip: host,
      uploadTime: new Date().toLocaleString(),
      "position": `${query['rowNum[0]']}行 ${query['colNum[0]']}列`,
      "userAgent": userAgent,
      "errorInfo": query['msg[0]'],
    });
    _ctx.body = {
      status: 200,
      result: badjs,
    };

  }
}



module.exports = QueryController;



