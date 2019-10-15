'use strict';
module.exports = (sequelize, DataTypes) => {
  const author = sequelize.define('author', {
    name: DataTypes.STRING,
    mustacheSize: DataTypes.INTEGER
  }, {});
  author.associate = function(models) {
    // associations can be defined here
    // always on the one side
    models.author.hasMany(models.post);
  };
  return author;
};