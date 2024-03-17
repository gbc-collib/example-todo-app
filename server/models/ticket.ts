const { DataTypes } = require("sequelize");
module.exports = (sequelize, type) => {
  return sequelize.define('Ticket',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      status: {
        type: DataTypes.ENUM('Open', 'In Progress', 'Resolved'),
        defaultValue: 'Open'
      },
      dueDate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      createDate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      user:
      {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tags: {
        type: DataTypes.STRING,
        allowNull: true
      }
    })
}