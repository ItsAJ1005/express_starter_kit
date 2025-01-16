

const getAllUsers = (req, res) => {
    res.status(200).json({ message: "Get all users" });
  };
  
  const createUser = (req, res) => {
    const user = req.body;
    res.status(201).json({ message: "User created", user });
  };
  
module.exports = { getAllUsers, createUser };
  