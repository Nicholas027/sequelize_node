import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { task } from "../models/Task.js";

export const Project = sequelize.define("projects", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  priority: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.STRING,
  },
});

Project.hasMany(task, {
  foreignKey: "projectId",
  sourceKey: "id",
});

task.belongsTo(Project, {
  foreignKey: "projectId",
  targetId: "id",
});
