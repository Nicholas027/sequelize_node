import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const task = sequelize.define(
  "tasks",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    done: {
      type: DataTypes.BOOLEAN,
      dafultValue: false,
    },
  },
  {
    timestamps: false,
  }
);
