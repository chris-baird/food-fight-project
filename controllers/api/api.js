var User = require('../../models/user');
var Business = require('../../models/business');

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  getAllBusinesses,
  getOneBusiness,
  createBusiness,
  updateBusiness,
  deleteBusiness
}

function getAllUsers(req, res, next) {
  User.find({}, function(err, users) {
    res.status(200).json(users);
  });
}

function getOneUser(req, res, next) {
  User.findById(req.params.id, function(err, user) {
    res.status(200).json(user);
  });
}

function createUser(req, res, next) {
  User.create(req.body, function(err, user) {
    if (err) return res.status(404).json({msg: 'Could not create user'});
    res.status(201).json(user);
  });
}

function updateUser(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body,
    {new: true}, function(err, user) {
      if (err) return res.status(404).json({msg: 'Could not update user'});
      res.status(200).json(user);
    });
}

function deleteUser(req, res, next) {
  User.findByIdAndRemove(req.params.id, function(err, user) {
    if (err) return res.status(404).json({msg: 'Could not delete user'});
    res.status(200).json(user);
  })
}

function getAllBusinesses(req, res, next) {
  Business.find({}, function(err, businesses) {
    console.log('hi');
    res.status(200).json(businesses);
  });
}

function getOneBusiness(req, res, next) {
  Business.findById(req.params.id, function(err, business) {
    res.status(200).json(business);
  });
}

function createBusiness(req, res, next) {
  Business.create(req.body, function(err, business) {
    if (err) return res.status(404).json({msg: 'Could not create business'});
    res.status(201).json(business);
  });
}

function updateBusiness(req, res, next) {
  Business.findByIdAndUpdate(req.params.id, req.body,
    {new: true}, function(err, business) {
      if (err) return res.status(404).json({msg: 'Could not update business'});
      res.status(200).json(business);
    });
}

function deleteBusiness(req, res, next) {
  Business.findByIdAndRemove(req.params.id, function(err, business) {
    if (err) return res.status(404).json({msg: 'Could not delete business'});
    res.status(200).json(business);
  })
}

