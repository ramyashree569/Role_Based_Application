"use strict";

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable(
    "teachers",
    {
      columns: {
        id: {
          type: "int",
          autoIncrement: true,
          unique: true,
          primaryKey: true,
        },
        t_username: { type: "string", unique: true, length: "20" },
        t_password: { type: "string", unique: true, length: "20" },
        t_email: { type: "string", unique: true, length: "20" },
      },
      ifNotExists: true,
    },
    callback
  );
};

exports.down = function (db, callback) {
  db.dropTable("teachers", callback);
};

exports._meta = {
  version: 1,
};
