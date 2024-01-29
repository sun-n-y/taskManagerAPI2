const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find({});
    res
      .status(200)
      .json({ msg: 'success, fetched all documents from mongodb', allTasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ msg: 'success, document created in mongodb', task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getSingleTask = async (req, res) => {
  res.json({ msg: 'success', data: `single task id:${req.params.id}` });
};

const updateTask = async (req, res) => {
  res.json({ msg: 'success', data: 'update task' });
};

const deleteTask = async (req, res) => {
  res.json({ msg: 'success', data: 'delete task' });
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
