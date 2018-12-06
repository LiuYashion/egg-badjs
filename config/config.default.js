'use strict';

module.exports = appInfo => {
  const config = exports = {};

  config.keys = appInfo.name + '_1535885709032_3135';

  config.middleware = [];

  config.sequelize = {
    dialect: 'mysql',
    host: '',
    port: 3306,
    database: '',
    username: '',
    password: '',
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  return config;
};
