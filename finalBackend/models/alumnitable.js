'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class alumniTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  alumniTable.init({
    Name: DataTypes.STRING,
    EnrollmentNo: DataTypes.INTEGER,
    Password: DataTypes.STRING,
    CollegeId: DataTypes.INTEGER,
    EmailId: DataTypes.STRING,
    Bio: DataTypes.STRING,
    QualificationDetails: DataTypes.STRING,
    YearOfPassing: DataTypes.INTEGER,
    CurrentlyDoing: DataTypes.STRING,
    FurtherPlanes: DataTypes.STRING,
    ContactNo: DataTypes.INTEGER,
    LinkedinId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'alumniTable',
  });
  return alumniTable;
};