const getAllTasks = async (req, res) => {
  res.json({ msg: 'success', data: 'all tasks' });
};

const createTask = async (req, res) => {
  res.json({ msg: 'success', data: req.body });
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
