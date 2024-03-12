const code = require("../services/verificationCode");
const userModel = require("../models/Users");
const bcrypt = require("bcrypt");
const getServices = async (req, res) => {
  try {
    
    if (req.params.userId == "all") {
      const providers = await userModel
        .find({
          isProvider: true,
          "service.availability.isAvailable": true,
        })
        .select("-password");

      res.json(providers);
    } else {
      const user = await userModel.findById(req.params.userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.json(user);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error " + error });
  }
};

const removeUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await userModel.findByIdAndDelete(userId);

    res.json("user removed succsefuly");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error " + error });
  }
};

const updateUser = async (req, res) => {
  try {
    const { userId, attribute } = req.params;
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    switch (attribute) {
      case "name":
        user.name = req.body.name;
        break;
      case "phoneNumber":
        user.phoneNumber = {
          number: req.body.phoneNumber,
          code: code(),
        };
        break;
      case "password":
        const cryptedPassword = bcrypt.hashSync(req.body.password, 10);
        user.password = cryptedPassword;
        break;
      case "imageUrl":
        user.imageUrl = req.body.imageUrl;
        break;
      case "rating":
        user.rating = req.body.rating;
        break;
      case "numberOfUsers":
        user.numberOfUsers = req.body.numberOfUsers;
        break;
      case "email":
        user.email = {
          emailAddress: req.body.email,
          code: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
        };
        break;
      case "serviceName":
        user.serviceName = req.body.serviceName;
        break;
      case "certification":
        user.certification = req.body.certification;
        break;
      default:
        return res.status(400).json({ message: "Invalid attribute" });
    }
    await user.save();
    res.json({ message: `${attribute} updated successfully`, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error " + error });
  }
};

module.exports = {
  getServices,
  updateUser,
  removeUser,
};
