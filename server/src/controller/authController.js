const bcrypt = require("bcrypt");
const userModel = require("../models/Users");
const jwt = require("jsonwebtoken");
const code = require("../services/verificationCode");

const signup = async (req, res) => {
  try {
    const { name, number, password, location } = req.body;
    const verifiedNumber = await userModel.findOne({ "phoneNumber.number" : number });

    if (verifiedNumber) {
      return res.status(400).json("Phone number already exists");
    } else {
      const cryptedPassword = bcrypt.hashSync(password, 10);
      const newUser = new userModel({
        name,
        phoneNumber: {
          number,
          code: code()
        },
        password: cryptedPassword,
        location,
      });

      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const { phoneNumber, password } = req.body;
    const user = await userModel.findOne({ "phoneNumber.number":phoneNumber });
    if (!user) {
      res.json({ message: "user does not exist" });
    } else {
      const isPassword = await bcrypt.compare(password, user.password);
      if (!isPassword) {
        res.json({ message: "incorrect password" });
      }
    }

    const token = jwt.sign({ id: user._id }, "hamza");
    return res.json({ token, userId: user._id });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signup, login };
