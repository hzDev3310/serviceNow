const code = require("../services/verificationCode");
const userModel = require("../models/Users");
const bcrypt = require("bcrypt");




const removeUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await userModel.findByIdAndDelete(userId);

    res.json({message :"user removed succsefuly"});
  } catch (error) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error " + err });
  }
};

const updateUser = async (req, res) => {
  try {
    const { userId, attribute } = req.params;
    const user = await userModel.findById(userId);
    const { value, password } = req.body
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    switch (attribute) {
      case "name":
        user.name = value;
        user.service ? user.service.ProviderName = value : null;
        break;
      case "location":
        user.location = value;
        user.service ? user.service.location = value : null;
        break;
      case "number":
        user.phoneNumber = {
          number: value,
          code: code(),
        };
        user.service ? user.service.phoneNumber = value : null;
        break;
      case "password":
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
          return res.status(404).json({ message: "Incorrect password" });
        }
        else {
          const cryptedPassword = bcrypt.hashSync(value, 10);
          user.password = cryptedPassword;
        }

        break;

      case "rating":
        user.service.rating.numberOfUsers++;
        user.service.rating.total += value;
        user.service.rating.average = user.service.rating.total / user.service.rating.numberOfUsers;
        break;
      case "email":
        user.email = {
          emailAddress: value,
          code: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
        };
        break;
      case "serviceName":
        user.service.serviceName = value;
        user.isProvider = false;
        user.service.certification = "";
        break;
      case "certification":
        user.service.certification = value;
        break;
      case "availability":
        user.service.availability = value;
        break;
      case "experience":
        user.service.experience = value;
        break;
      case "comment":
        user.service.comments.push(value)
        break;
        case "photo":
          user.profilPic = "";
         if(user.service){
          user.service.profilPic = ""
         }
          break;
      default:
        return res.status(400).json({ message: "Invalid attribute" });
    }
    await user.save();
    res.json({ message: `${attribute} updated successfully` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error " + error });
  }
};

const getuser = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await userModel.findById(userId);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error " + error });
  }
}

const getOtherUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id)
    res.json({
      name: user.name,
      pic: user.profilPic
    })
  } catch (error) {
    res.status(404).json(error)
  }
}

const getUsers = async (req, res) => {
  const id = req.query.id;
  let users;

  try {
    if (!id) {
      users = await userModel.find();
    } else {
      users = await userModel.findById(id);
      if (!users) {
        return res.status(404).json({ message: "User not found" });
      }
    }

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};





module.exports = {
  updateUser,
  removeUser,
  getuser,
  getOtherUser,
  getUsers,

};
