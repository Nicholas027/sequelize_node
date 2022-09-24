import { task } from "../models/Task.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await task.findAll();
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createTask = async (req, res) => {
  try {
    const { name, done, projectId } = req.body;
    const newTask = await task.create({
      name,
      done,
      projectId,
    });
    res.json(newTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const singleTask = await task.findOne({
      where: { id },
    });
    res.json(singleTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    const taskForUpdate = await task.findOne({
      where: { id },
    });
    taskForUpdate.set(req.body);
    await taskForUpdate.save();
    return res.json(taskForUpdate);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await task.destroy({
      where: { id },
    });
    console.log(result);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
