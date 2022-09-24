import { Project } from "../models/Project.js";
import { task } from "../models/Task.js";

export const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const project = await Project.findOne({
      where: {
        id,
      },
    });
    if (!project)
      return res.status(404).json({ message: "Project does not exist" });
    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createProjects = async (req, res, next) => {
  const { name, priority, description } = req.body;
  try {
    const newProject = await Project.create({
      name,
      description,
      priority,
    });
    res.json(newProject);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, priority, description } = req.body;
    const project = await Project.findByPk(id);
    project.name = name;
    project.priority = priority;
    project.description = description;
    await project.save();
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await Project.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProjectTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const tasks = await task.findAll({
      where: { projectId: id },
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
