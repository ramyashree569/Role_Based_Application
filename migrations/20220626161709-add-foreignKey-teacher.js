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
  db.addForeignKey(
    "teachers",
    "login",
    "createdBy",
    {
      username: "id",
    },
    {
      onDelete: "CASCADE",
      onUpdate: "RESTRICT",
    },
    callback
  );
};

exports.down = function (db, callback) {
  db.removeForeignKey(
    "teachers",
    "createdBy",
    {
      dropIndex: true,
    },
    callback
  );
};

exports._meta = {
  version: 1,
};
