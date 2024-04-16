const Admin =require('../models/admin.model');

const createadmin = async (req, res) => {
    try {
      const admin = await Admin.create(req.body);
      res.status(200).json(admin);
    } catch (error) {
      res.status(500).json({ message: error.message });
      
    }
  };

  const listAdmin =  async (req, res) => {
    try {
      const admin = await Admin.find({});
      res.status(200).json(admin);
    } catch (error) {
      res.status(500).json({ message: error.message });
      
    }
  };

  module.exports = {
    createadmin,
    listAdmin
  };