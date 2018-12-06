'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const Badjs = app.model.define('javascript_error',
    {
      id: { 
        type: INTEGER, 
        primaryKey: true, 
        autoIncrement: true
      },
      position: STRING(50),
      userAgent: STRING(),
      ip: STRING(32),
      errorInfo: STRING(32),
      uploadTime: STRING(32)
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  Badjs.sync({force: false});
  
  return Badjs;
};
