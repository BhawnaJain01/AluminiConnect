'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('alumniTables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING
      },
      EnrollmentNo: {
        type: Sequelize.INTEGER
      },
      Password: {
        type: Sequelize.STRING
      },
      CollegeId: {
        type: Sequelize.INTEGER
      },
      EmailId: {
        type: Sequelize.STRING
      },
      Bio: {
        type: Sequelize.STRING
      },
      QualificationDetails: {
        type: Sequelize.STRING
      },
      YearOfPassing: {
        type: Sequelize.INTEGER
      },
      CurrentlyDoing: {
        type: Sequelize.STRING
      },
      FurtherPlanes: {
        type: Sequelize.STRING
      },
      ContactNo: {
        type: Sequelize.INTEGER
      },
      LinkedinId: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('alumniTables');
  }
};